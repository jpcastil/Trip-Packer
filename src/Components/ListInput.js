import React, {Component} from 'react';
import './../App.css';
import InputItem from './InputItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

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
        let objRef = this.props.jsonInput
        for (let i = 0; i < objRef.length; i ++ ) {
            newLs.push(<InputItem key={objRef[ i ].id} id={objRef[ i ].id} jsonInput={objRef[ i ]} editing={this.props.editing}/>)
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
