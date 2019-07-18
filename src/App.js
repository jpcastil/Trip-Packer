import React, {Component} from 'react';
import './App.css';

import ListTitle from './Components/ListTitle'
import List from './Components/List'
import ListInput from './Components/ListInput'
import LOL from './Components/LOL'
import NavBar from './Components/NavBar'

export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            jsonData: {
                _id: null,
                items: [],
                title: ''
            },
            jsonInput: [
            ],
            inputValue: '',
            editing: false,
            email: '',
            password: '',
            logInPage: true,
            signUpPage: false,
            llPage: false,
            listOfLists: []
        }
    }
    componentDidMount(){

    }
    getList = (email, _id) => {
        fetch("http://localhost:5000/list", {
            method: 'POST',
            mode: 'cors',
            headers: {
                   'Content-Type': 'application/json',
               },
            body: JSON.stringify({email: email, _id: _id})
        })
        .then( response => response.json() )
        .then( jsonData => {
            console.log(jsonData)
            this.setState({
                jsonData: jsonData,
                llPage: ! this.state.llPage
        })})
    }
    auth = (email, password) => {
        fetch("http://localhost:5000/auth", {
            method: 'POST',
            mode: 'cors',
            headers: {
                   'Content-Type': 'application/json',
               },
            body: JSON.stringify({email: email, password: password})
        })
            .then( response => response.json() )
            .then( jsonData => this.postAuth(jsonData))
    }
    sampleFetch() {
        let x;
        fetch("http://localhost:5000/")
            .then( response => response.json() )
            .then( jsonData => console.log(jsonData))
    }
    signUp = (email, password) => {
        let cleanedE = email.trim()
        let cleanedP = password.trim()
        if (cleanedE === '' || cleanedP === ''){
            alert("Fields cannot be blank")
        } else if (cleanedE.indexOf(' ') > 0 || cleanedP.indexOf(' ') > 0){
            alert("Cannot have white space")
        }
        else {
            fetch("http://localhost:5000/create", {
                method: 'POST',
                mode: 'cors',
                headers: {
                       'Content-Type': 'application/json',
                   },
                body: JSON.stringify({email: cleanedE, password: cleanedP})
            })
            .then( response => response.json() )
            .then( jsonData => console.log(jsonData))
        }
    }
    store = (email, jsonData) => {
        if (jsonData._id === null) {
            fetch("http://localhost:5000/store", {
                method: 'POST',
                mode: 'cors',
                headers: {
                       'Content-Type': 'application/json',
                   },
                body: JSON.stringify({email: email, jsonData: jsonData})
            })
            .then( response => response.json() )
            .then( jsonData => this.setState({
                jsonData: {
                    _id: jsonData,
                    items: this.state.jsonData.items,
                    title: this.state.jsonData.title
                }
            }))
        } else {
            fetch("http://localhost:5000/update", {
                method: 'POST',
                mode: 'cors',
                headers: {
                       'Content-Type': 'application/json',
                   },
                body: JSON.stringify({email: email, jsonData: jsonData})
            })
            .then( response => response.json() )
            .then( jsonData => console.log(jsonData))
        }
        this.getAll(this.state.email)
    }
    onChangeTitle = (evt) =>{
        /* Handler function for each inputObj changing value */
        this.setState({
            jsonData: {
                _id: this.state.jsonData._id,
                key: this.state.jsonData.key,
                items: this.state.jsonData.items,
                title: evt.target.value,
            },
        })
    }
    getLastId = (ls) => {
        if (ls.length === 0){
            return 0
        } else {
            return ls[ ls.length - 1].id + 1
        }
    }
    addItem = (value, checked) => {
        /* Create a new id, being the next number after the last item id */
        let pointerInput = this.state.jsonInput
        let pointerItems = this.state.jsonData.items
        let id = this.getLastId(pointerInput) + this.getLastId(pointerItems)
        /* Push a new inputObj into inputList. This is in state, so it rerenders */
        pointerInput.push({id: id, value: value, checked: checked, deleteFunc: this.deleteFunc, onChangeFunc: this.onChangeFunc, saveFunc: this.saveFunc })
        this.setState({
            jsonInput: pointerInput
        })
    }
    deleteFunc = (id) => {
        /* Deletes the inputObj in state by filtering. */
        let pointerInput = this.state.jsonInput
        let result = pointerInput.filter(inputObj => inputObj.id !== id)
        this.setState({
            jsonInput: result
        })
    }
    onChangeFunc = (evt, id) =>{
        /* Handler function for each inputObj changing value */
        let pointerInput = this.state.jsonInput
        for (let i = 0; i < pointerInput.length; i ++){
            if (pointerInput[ i ].id === id){
                pointerInput[ i ].value = evt.target.value
            }
        }

        this.setState({
          jsonInput: pointerInput
        })
    }
    saveFunc = (id) => {
        /* Converts the inputItem into a ListItem */
        let pointerInput = this.state.jsonInput
        let pointerItems
        /* Find index of input item in ls */
        for (let i = 0; i < pointerInput.length; i ++){
            if (pointerInput[ i ].id === id){
                pointerItems = i
             }
        }
        /* itemData is inputObject */
        let itemData = pointerInput[ pointerItems ]

        /* If empty, do not save. Else, make it a new list item */
        if (itemData.value === ''){
            this.deleteFunc(id)
        } else {
            let resultLs = pointerInput.filter(inputObj => inputObj.id !== id)

            let itemLsPointer = this.state.jsonData.items
            itemLsPointer.push({text: itemData.value, checked: itemData.checked, id: itemData.id})

            this.setState({
              jsonInput: resultLs,
              items: itemLsPointer
            })
        }
    }
    onCheckFunc = (id) => {
        /* Changes check boolean for the id */
        let pointerItems = this.state.jsonData.items
        for (let i = 0; i < pointerItems.length; i ++) {
            if (pointerItems[ i ].id === id){
                pointerItems[ i ].checked = ! pointerItems[ i ].checked
                break
            }
        }
        this.setState({
            jsonData: {
                _id: this.state.jsonData._id,
                key: this.state.jsonData.key,
                items: pointerItems,
                title: this.state.jsonData.title
            },
        })
    }
    editFunc = () => {
        let pointerItems = this.state.jsonData.items
        let pointerInput = this.state.jsonInput
        let newLs = []
        for (let i = 0; i < pointerItems.length; i ++){
            newLs.push({id: pointerItems[ i ].id, value: pointerItems[ i ].text, checked: pointerItems[ i ].checked, deleteFunc: this.deleteFunc, onChangeFunc: this.onChangeFunc, saveFunc: this.saveFunc })
        }
        this.setState({
          jsonInput: newLs.concat(pointerInput),
          jsonData: {
              _id: this.state.jsonData._id,
              key: this.state.jsonData.key,
              items: [],
              title: this.state.jsonData.title,
          },
          editing: ! this.state.editing
        })
    }
    saveAll = () => {
        let pointerItems = this.state.jsonData.items
        let pointerInput = this.state.jsonInput
        for (let i = 0; i < pointerInput.length; i ++){
            if (pointerInput[ i ].value !== ''){
                pointerItems.push({text: pointerInput[ i ].value, checked: pointerInput[ i ].checked, id: pointerInput[ i ].id})
            }
        }
        this.setState({
          jsonInput: [],
          jsonData: {
              _id: this.state.jsonData._id,
              key: this.state.jsonData.key,
              items: pointerItems,
              title: this.state.jsonData.title
          },
          editing: ! this.state.editing
      }, this.store(this.state.email, this.state.jsonData))
    }

    goBack = () => {
        console.log("Go Back Called")

        let email = this.state.email
        let jsonData = this.state.jsonData

        if (jsonData._id === null) {
            fetch("http://localhost:5000/store", {
                method: 'POST',
                mode: 'cors',
                headers: {
                       'Content-Type': 'application/json',
                   },
                body: JSON.stringify({email: email, jsonData: jsonData})
            })
            .then( response => response.json() )
            .then( jsonData => console.log(jsonData))
        } else {
            fetch("http://localhost:5000/update", {
                method: 'POST',
                mode: 'cors',
                headers: {
                       'Content-Type': 'application/json',
                   },
                body: JSON.stringify({email: email, jsonData: jsonData})
            })
            .then( response => response.json() )
            .then( jsonData => console.log(jsonData))
        }
        this.setState({
            llPage: ! this.state.llPage
        }, this.getAll(this.state.email))
    }
    completeLogin = (email, password) => {
        if (email === '' || password === ''){
            alert("Fields cannot be blank")
        } else {
            this.auth(email, password)
        }
    }
    postAuth = (code) => {
        if (code === null){
            alert("email does not exist")
        } else if (code === false) {
            alert("Wrong Pass")
        } else {
            this.loginSuccess()
        }
    }
    loginSuccess = () => {
        this.setState({
            logInPage: ! this.state.logInPage,
            llPage: ! this.state.llPage
        })
        this.getAll(this.state.email)
    }
    onChangeEmail = (evt) =>{
        /* Handler function for each inputObj changing value */
        this.setState({
            email: evt.target.value,
        })
    }
    onChangePassword = (evt) =>{
        /* Handler function for each inputObj changing value */
        this.setState({
            password: evt.target.value,
        })
    }

    getAll = (email) => {
        fetch("http://localhost:5000/getAll", {
            method: 'POST',
            mode: 'cors',
            headers: {
                   'Content-Type': 'application/json',
               },
            body: JSON.stringify({email: email})
        })
            .then( response => response.json() )
            .then( jsonData => this.setListOfLists(jsonData))
    }

    setListOfLists = (jsonData) => {
        let newLs = jsonData.map( item => {delete item.items; return item})
        this.setState({
            listOfLists: newLs
        })
    }

    addList = () => {
        this.setState({
            jsonData: {
                _id: null,
                items: [],
                title: 'Untitled',
            },
            llPage: ! this.state.llPage
        })
    }

    render(){
        return(
            <div>
                <NavBar />
                <div className = { !this.state.logInPage && !this.state.llPage ? "show" : "noShow"  } >
                    <ListTitle goBack={this.goBack} saveAll={this.saveAll} title={this.state.jsonData.title} editing={this.state.editing} addItem={() => this.addItem('', false)} editFunc={this.editFunc} onChangeTitle={this.onChangeTitle}/>
                    <List jsonData={this.state.jsonData.items} onCheckFunc={this.onCheckFunc}/>
                    <ListInput jsonInput={this.state.jsonInput} editing={this.state.editing}/>
                </div>
                <div className = { ! this.state.logInPage ? "noShow" : "showLogin" }>
                    <input value={this.state.email} type="text" autoFocus={true} className='inputStyle' onChange={evt => this.onChangeEmail(evt)} />
                    <input value={this.state.password} type="text" autoFocus={true} className='inputStyle' onChange={evt => this.onChangePassword(evt)} />
                    <p onClick={() => this.completeLogin(this.state.email, this.state.password)}>Login</p>
                    <p onClick={() => this.signUp(this.state.email, this.state.password)}>Sign Up</p>
                </div>
                <div className = { ! this.state.logInPage && this.state.llPage ? "show":  "noShow"  } >
                    <LOL lol={this.state.listOfLists} addList={this.addList} getList={this.getList} email={this.state.email}/>
                </div>
                <p onClick={() => console.log(this.state)}>See State</p>

            </div>

        )
    }
}
