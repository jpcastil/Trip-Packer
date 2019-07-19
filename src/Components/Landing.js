import React, {Component} from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl, faList, faMobile } from '@fortawesome/free-solid-svg-icons'
import ljpg from './images/landing.jpg'

export default class Landing extends Component{

    render(){
        return(
        <div>
             <div className="fillUp ">
                 <img src={ljpg} style={{width: '100%', opacity: '0.7'}}/>
                 <div style={{borderTop: "5px solid"}} alt={'img'}></div>
                 <br />
                 <h1 className="text-center   "> Trip Packer </h1>
             </div>
             <br />
             <div className="container">
    {/* Mission */}
                 <div className="row justify-content-center">
                     <div className="col-12">
                         <p className="text-center">Mission</p>
                     </div>
                 </div>
                 <div className="row align-items-center justify-content-center">
                     <p className="col   fillUp text-center"> Our goal is for an easier traveling experience. With this Web Application, you can store all the packing details for each of your trips. You can access your data anytime and anywhere.</p>
                 </div>
    {/*Features*/}
                 <hr />
                 <div className="row justify-content-center">
                     <div className="col-12">
                         <p className="text-center">Features</p>
                     </div>
                 </div>
                 <div className="row align-items-center">
                     <p className="col-6 order-2 order-md-1 col-md-4 text-center">
                        <FontAwesomeIcon  style={{color: "#8c8c8c"}} icon={faListOl} size="6x" />
                     </p>
                     <p className="col-12 order-1 order-md-2 col-md-4 text-center fillUp"> Upon a successful login, you can see any list you have created. With a simple click to the right, you can proceed to use that list as you would with any app. </p>
                     <p className="col-6 order-3 order-md-3 col-md-4 text-center">
                         <FontAwesomeIcon style={{color: "#8c8c8c"}} icon={faList} size="6x" />
                     </p>
                 </div>
                 <hr />
    {/* Pricing */}
                 <div className="row">
                     <div className="col-12">
                         <p className="text-center">Pricing</p>
                     </div>
                     <div className="col-12">
                         <p className="text-center  ">None. Given how simple an app like this takes, it wouldn't make any sense to charge people for it. Download it for free on <a href="https://github.com/jpcastil/Trip-Packer">GitHub</a>.</p>
                     </div>
                 </div>
                 <hr />
    {/* Coming Soon to iPhone */}
                 <br />
                 <div className="d-none d-md-block">
                     <div className="row">
                         <p className="col-5 text-center">
                            <FontAwesomeIcon  icon={faMobile} size="8x" />
                         </p>
                         <div className="col-7 ">
                             <h4 className="text-center  ">  Mobile Friendly</h4>
                             <br />
                             <p className="text-center"> Our Web App has been designed to be utilized from any screen size. From the smallest of screens to 4K monitors, you will always have access.</p>
                         </div>
                         <hr/>
                     </div>
                </div>
                <div className="d-md-none">
                    <div className="row align-items-center">
                        <p className="col-5 text-center">
                            <FontAwesomeIcon  icon={faMobile} size="7x" />
                        </p>
                        <div className="col-7 ">
                            <h4 className="text-center"> Mobile Friendly</h4>
                            <br />
                            <p className="text-center"> Our Web App has been designed to be utilized from any screen size. From the smallest of screens to 4K monitors, you will always have access.</p>
                        </div>
                        <hr/>
                    </div>
               </div>
             </div>
             <br />

    {/*Footer */}
             <footer className="footerStyle">
         		<div className="container-fluid">
         			<div className="row">
         				<div className="pt-2 col-6 text-right">
                            <p><a href="https://www.linkedin.com/in/jesus-panales-castillo-00bb96127/" className="text-muted " style={{color:"grey"}}>Contact</a></p>
                        </div>
         				<div className="pt-2 col-6 text-left">
                            <p><a href="https://github.com/jpcastil/Trip-Packer" style={{color:"grey"}}>Support</a></p>
                        </div>
                    </div>
                </div>
            </ footer>
        </ div>



    )
    }
}
