const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const ObjectId = require('mongodb').ObjectID;

app.listen(5000, () =>
  console.log('Trip Packer Server listening on port 5000!'),
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("trip");
        dbo.collection("users").findOne({email: "jesus"}, function(err, result) { db.close(); return res.json(result);});
    });
});

app.use(express.json());

/* Otherwise, inserts {email: __, password: __} into users */
app.post('/create', function (req, res) {
    MongoClient.connect(url, function(err, db) {

        if (err) throw err;
        var dbo = db.db("trip");

        dbo.collection("users").findOne({email: req.body.email},
        function(err, result) {
            if ( result !== null ){
                return res.json(false)
            } else {
                dbo.collection("users").insertOne(req.body, function(err) {
                    if (err) throw err;
                    return res.json(true)
                });
            }
            db.close()
        })
    });
})


/*  returns null if email DNE
    otherwise returns boolean if passwords match */
app.post('/auth', (req, res, next) => {
    console.log("Authenticating" + " " + req.body.email)
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("trip");
        dbo.collection("users").findOne({email: req.body.email},
        function(err, result) { db.close();
            if ( result === null ){
                console.log(null)
                return res.json(null)
            } else {
                console.log(result.password === req.body.password)
                return res.json(result.password === req.body.password)
            }
        });
    });
});


/* Stores a list in the user's collection */
app.post('/store', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("trip");
        var i = new ObjectId()
        dbo.collection(req.body.email).insertOne({_id: i, items: req.body.jsonData.items, title: req.body.jsonData.title}, function(err, res) {
            if (err) throw err;
            db.close();
        });
        return res.json(i)
    });
})

/* Updates list of object_id */
app.post('/update', function (req, res) {
    console.log(req.body)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("trip")
        dbo.collection(req.body.email).replaceOne({"_id": ObjectId(req.body.jsonData._id)}, {
            _id: ObjectId(req.body.jsonData._id),
            items: req.body.jsonData.items,
            title: req.body.jsonData.title
        })
    });
})

/* Get list */
app.post('/list', (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("trip");
        dbo.collection(req.body.email).findOne({_id: ObjectId(req.body._id)}, function(err, result) { db.close(); return res.json(result);});
    });
});

/* Get All */

app.post('/getAll', (req, res, next) => {
    console.log(req.body.email)
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("trip");

        dbo.collection(req.body.email).find(
            (err, results) => (results.toArray(
                (err, results) => {console.log(results); res.json(results)}))
        )

    });
})
