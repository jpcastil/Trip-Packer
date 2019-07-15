import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faEdit, faSave } from '@fortawesome/free-regular-svg-icons'

export default class ListTitle extends Component{

    render(){
        return(
            <div className="row">
                {this.props.editing ? <FontAwesomeIcon icon={faSave} size="3x" color="green" onClick={this.props.saveAll}/> : <FontAwesomeIcon className="col-3" onClick={this.props.editFunc} icon={faEdit} size="3x" />}
                {this.props.editing ? <input value={this.props.title} type="text" className='inputStyle' onChange={evt => this.props.onChangeTitle(evt)} /> : <h1 className="col-6 text-center"> {this.props.title} </h1>}
                <div className="col-1"></div>
                <FontAwesomeIcon className="col-2"  onClick={this.props.addItem}  icon={faPlusSquare} size="3x" />
            </div>
        )
    }
}
