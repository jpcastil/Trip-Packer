import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default class ListItem extends Component{

    render(){
        return(
            <div className="row align-items-center">
                <div className="col-1">
                    <FontAwesomeIcon icon={this.props.checked ? faCheckCircle : faCircle} size="3x" onClick={() => this.props.onCheckFunc(this.props.id)}/>
                </div>
                <div className="col-5">
                    {this.props.text}
                </div>
            </div>
        )
    }
}
