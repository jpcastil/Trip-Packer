import React, {Component} from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class LOLItem extends Component {
    render () {
        return (
            <div className="col-12">

                <div className="container">
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-6 offset-3 col-sm-4 offset-sm-4 ">
                            <h3 className="text-center">{this.props.item.title}</h3>
                        </div>
                        <div className="col-1 mr-auto ">
                            <FontAwesomeIcon onClick={() => this.props.getList(this.props.email, this.props.item._id)} icon={faChevronRight} size="1x"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
