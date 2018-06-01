import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isAbsolute } from 'path';
import SearchBar from './search_bar';
import Menu from './menu';





export default class Header extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
   
        return (
            <header>
            <div className="container-fluid">
                <div className="row row-eq-height">
                    <div className="col-xs-2 text-center left-nav nav">  
                        <Menu/>  
                    
                         {/* <NavLink to="/eventDetails" className="nav-link" activeClassName="active selected"> <i className="fa fa-bars"></i></NavLink> */}
                    </div>
                    <div className="col-xs-8 text-center center-nav nav">
                        <p>Live Music Finder</p>
                    </div>
                    <div className="col-xs-2 text-center right-nav nav">
                        { searchComponent }
                    </div>
                </div>
            </div>
        </header>
        )
    }
}
