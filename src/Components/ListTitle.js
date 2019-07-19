import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faEdit, faSave } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default class ListTitle extends Component{



    render(){
        return(
            <div className="container">
                <div className="row ">
                    <div className="col-1 ">
                        {this.props.editing ? <div></div> : <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" color="black" onClick={this.props.goBack}/> }
                    </div>
                    <div className="col-2 col-md-3">
                        <p className="text-center">{this.props.editing ? <FontAwesomeIcon icon={faSave} size="3x" color="green" onClick={this.props.saveAll}/> : <FontAwesomeIcon onClick={this.props.editFunc} icon={faEdit} size="3x" />}</p>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>{this.props.editing ? <input value={this.props.title} style={{width: '100%'}} type="text" className='inputStyle' onChange={evt => this.props.onChangeTitle(evt)} /> : <h1 className="text-center"> {this.props.title} </h1>}</p>
                    </div>
                    <div className="col-2 col-md-3">
                        <p className="text-center"><FontAwesomeIcon  onClick={this.props.addItem}  icon={faPlusSquare} size="3x" /></p>
                    </div>
                    <div className="col-1">
                    </div>
                </div>

            </div>

        )
    }
}
