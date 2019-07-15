mapToEdit = () => {
    let pointerInput = this.state.jsonInput
    let pointerItems = this.state.jsonData.items
    for (let i = 0; i < pointerItems.length; i ++ ){
        pointerItems.push({id: , value: '', deleteFunc: this.deleteFunc, onChangeFunc: this.onChangeFunc, saveFunc: this.saveFunc })
    }
    /* Push a new inputObj into inputList. This is in state, so it rerenders */
    pointerInput.push({id: id, value: '', deleteFunc: this.deleteFunc, onChangeFunc: this.onChangeFunc, saveFunc: this.saveFunc })
    this.setState({
        jsonInput: pointerInput
    })
}
