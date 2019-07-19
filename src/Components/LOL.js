import React, {Component} from 'react';
import './../App.css';
import LOLItem from './LOLItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'







export default class LOL extends Component {
    mapLOL = () => {
        let newLs = []
        let l = this.props.lol
        for (let i = 0; i < l.length ; i ++){
            newLs.push(<LOLItem title={l[ i ].title} key={l[ i ]._id} email={this.props.email} item = {l[ i ]} getList={this.props.getList}/>)
        }
        return newLs
    }
    render(){
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 offset-3">
                        <h1 className='text-center'>My Trips</h1>
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon onClick={this.props.addList} icon={faPlusCircle} size="2x"/>
                    </div>
                </div>
                <div className="row">
                    {this.mapLOL()}
                </div>
            </div>
        )
    }
}
