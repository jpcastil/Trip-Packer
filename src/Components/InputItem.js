import React, {Component} from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

export default class ListInput extends Component{

    render(){
        return(
                <div className="row align-items-center">
                    <div className="col-3 col-md-4">
                        <p className="text-right"><FontAwesomeIcon icon={faTrash} size="2x" color="darkred" onClick={() => this.props.jsonInput.deleteFunc(this.props.jsonInput.id)}/></p>
                    </div>
                    <div className="col-6 col-md-4">
                        <p><input value={this.props.jsonInput.value} style={{width: "100%"}} type="text" autoFocus={true} className='inputStyle' onChange={evt => this.props.jsonInput.onChangeFunc(evt, this.props.jsonInput.id)} /></p>
                    </div>
                    <div className="col-3 col-md-4">

                        <p className="text-left">{this.props.editing ? <div></div>: <FontAwesomeIcon icon={faSave} size="2x" color="blue" onClick={() => this.props.jsonInput.saveFunc(this.props.jsonInput.id)}/> }</p>
                    </div>
                </div>

        )
    }
}
