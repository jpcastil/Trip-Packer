import React, {Component} from 'react';
import './../App.css';

export default class LOLItem extends Component {
    render () {
        return (
            <div>
                {this.props.item.title}
                <p onClick={() => this.props.getList(this.props.email, this.props.item._id)}>>></p>
                
            </div>
        )
    }
}
