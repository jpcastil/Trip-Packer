import React, {Component} from 'react';
import './../App.css';
import LOLItem from './LOLItem'


/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><i class="fas fa-leaf fa-2x mainColor"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#" style="font-family: 'Short Stack', cursive;">Home <span class="sr-only">(current)</span></a>
            </li>

        </ul>
        <span class=" navbar-text d-none d-md-block">
            <a class="mainFont" href="./login.html" style="color:grey; text-decoration: none;"> Login </a>
        </span>
        <span class=" navbar-text d-none d-md-block">
            <a class="mainFont" href="./login.html" style="color:grey; padding-left: 20px; text-decoration: none;"> Sign Up </a>
        </span>
    </div>
</nav>*/


/*
<LOL lol={this.state.listOfLists} addList={this.addList} getList={this.getList} email={this.state.email}/>

{this.props.item.title}
<p onClick={() => this.props.getList(this.props.email, this.props.item._id)}>>></p>
*/
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
            <div>
                {this.mapLOL()}
                <p onClick={this.props.addList}>+</p>
            </div>
        )
    }
}
