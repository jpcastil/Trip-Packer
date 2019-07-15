import React, {Component} from 'react';
import './App.css';

import ListTitle from './Components/ListTitle'
import List from './Components/List'
import ListInput from './Components/ListInput'




export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            jsonData: {
                key: null,
                items: [],
                title: ''
            },
            jsonInput: [
            ],
            inputValue: '',
            editing: false
        }
    }

     componentDidMount() {
    /* data = fetch () */
    /* this.setState({jsonData: data}) */

    }

    onChangeTitle = (evt) =>{
        /* Handler function for each inputObj changing value */
        this.setState({
            jsonData: {
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
              key: this.state.jsonData.key,
              items: pointerItems,
              title: this.state.jsonData.title
          },
          editing: ! this.state.editing
        })
    }

    render(){
        return(
            <div>
                <ListTitle saveAll={this.saveAll} title={this.state.jsonData.title} editing={this.state.editing} addItem={() => this.addItem('', false)} editFunc={this.editFunc} onChangeTitle={this.onChangeTitle}/>
                <List jsonData={this.state.jsonData.items} onCheckFunc={this.onCheckFunc}/>
                <ListInput jsonInput={this.state.jsonInput} editing={this.state.editing}/>
            </div>
        )
    }
}
