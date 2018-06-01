import React, { Component } from 'react';



class Top extends Component {
    constructor (props){ 
        super (props);   
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-12 top-display-text text-center">
                    <p className="label">{this.props.city_name}</p>
                </div>
            </div>
                );
            }
        }

export default Top;