import React, {Component} from 'react';
import './../App.css';
import ListItem from './ListItem'

/*
                jsonData
    {
    key:83,
    items:[
            {text:'yogurt',checked:true},
            {text:'salsa',checked:false,
            {text:'peanut butter',checked:true}
        ],
    title: "Walmart Trip"
    }

*/

export default class App extends Component{

    mapList = () => {
        let newLs = []
        let pointerItems = this.props.jsonData
        for (let i = 0; i < pointerItems.length; i ++ ) {
            newLs.push(<ListItem id={pointerItems[ i ].id} key={pointerItems[ i ].id} text={pointerItems[ i ].text} checked={pointerItems[ i ].checked} onCheckFunc={this.props.onCheckFunc}/>)
        }
        return newLs
    }

    render(){
        return(
            <div>
                {this.mapList()}
            </div>
        )
    }
}
