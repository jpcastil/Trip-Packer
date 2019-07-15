import React, {Component} from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

export default class ListInput extends Component{

    render(){
        return(
            <div>
                <FontAwesomeIcon icon={faTrash} size="2x" color="darkred" onClick={() => this.props.jsonInput.deleteFunc(this.props.jsonInput.id)}/>
                <input value={this.props.jsonInput.value} type="text" autoFocus={true} className='inputStyle' onChange={evt => this.props.jsonInput.onChangeFunc(evt, this.props.jsonInput.id)} />
                {this.props.editing ? <div></div>: <FontAwesomeIcon icon={faSave} size="2x" color="blue" onClick={() => this.props.jsonInput.saveFunc(this.props.jsonInput.id)}/> }
                <p onClick={() => console.log(this.props)}>See Props</p>
            </div>
        )
    }
}
