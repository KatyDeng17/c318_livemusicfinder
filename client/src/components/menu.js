import React, { Component } from 'react';
import MenuLinks from './menu_links';
import SearchIcon from './search_icon';
import SearchBar from './search_bar';
import DisplayText from '../assets/images/live.png';


class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isSearchInputActive: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this); 
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocementClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e){
        if(!this.ref.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleSearchBar() {
        const { isSearchInputActive } = this.state;

        // Ternary equivalent to using if / else
        isSearchInputActive ? 
            this.setState({ isSearchInputActive: false }) : 
            this.setState({ isSearchInputActive: true });
        
        // if(this.state.isSearchInputActive){
        //         this.setState({ isSearchInputActive : false});
        // } else {
        //     this.setState({ 
        //         isSearchInputActive : true,      
        //     });
        // } 
    }

    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
        let { isSearchInputActive } = this.state;

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker row" onClick={ this._menuToggle }></div>
                        <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span>
                    </div>

                        <div className="title">
                            <span></span>
                        </div>
                        {/* <SearchBar /> */}
                        <SearchIcon toggleSearchBar={ this.toggleSearchBar.bind(this) }/>

                        <div className="barsSvg-left">
                                                <svg class="lds-equalizer" width="86px"  height="86px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(180 50 50)"><rect ng-attr-x="{{7.6923076923076925 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="24.0108" fill="#e15b64" x="4.6923076923076925" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5833333333333334s" dur="1">
                        </animate></rect><rect ng-attr-x="{{15.384615384615385 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="28.4181" fill="#f47e60" x="12.384615384615385" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.6666666666666666s" dur="1">
                        </animate></rect><rect ng-attr-x="{{23.076923076923077 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="8.11305" fill="#f8b26a" x="20.076923076923077" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="0s" dur="1">
                        </animate></rect><rect ng-attr-x="{{30.76923076923077 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="29.9656" fill="#abbd81" x="27.76923076923077" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.75s" dur="1">
                        </animate></rect><rect ng-attr-x="{{38.46153846153846 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="4.08943" fill="#849b87" x="35.46153846153846" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.08333333333333333s" dur="1">
                        </animate></rect><rect ng-attr-x="{{46.15384615384615 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="10.4173" fill="#e15b64" x="43.15384615384615" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.25s" dur="1">
                        </animate></rect><rect ng-attr-x="{{53.84615384615385 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="19.945" fill="#f47e60" x="50.84615384615385" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.4166666666666667s" dur="1">
                        </animate></rect><rect ng-attr-x="{{61.53846153846154 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="28.3615" fill="#f8b26a" x="58.53846153846154" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.8333333333333334s" dur="1">
                        </animate></rect><rect ng-attr-x="{{69.23076923076923 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="5.00829" fill="#abbd81" x="66.23076923076923" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.16666666666666666s" dur="1">
                        </animate></rect><rect ng-attr-x="{{76.92307692307692 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="20.6302" fill="#849b87" x="73.92307692307692" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5s" dur="1">
                        </animate></rect><rect ng-attr-x="{{84.61538461538461 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="17.4689" fill="#e15b64" x="81.61538461538461" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.3333333333333333s" dur="1">
                        </animate></rect><rect ng-attr-x="{{92.3076923076923 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="19.572" fill="#f47e60" x="89.3076923076923" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.9166666666666666s" dur="1">
                        </animate></rect></g></svg>

                        </div>
                        <img className="logo" src= {DisplayText}/>
                         <div className="barsSvg-right">
                                                <svg class="lds-equalizer" width="86px"  height="86px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(180 50 50)"><rect ng-attr-x="{{7.6923076923076925 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="24.0108" fill="#e15b64" x="4.6923076923076925" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5833333333333334s" dur="1">
                        </animate></rect><rect ng-attr-x="{{15.384615384615385 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="28.4181" fill="#f47e60" x="12.384615384615385" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.6666666666666666s" dur="1">
                        </animate></rect><rect ng-attr-x="{{23.076923076923077 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="8.11305" fill="#f8b26a" x="20.076923076923077" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="0s" dur="1">
                        </animate></rect><rect ng-attr-x="{{30.76923076923077 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="29.9656" fill="#abbd81" x="27.76923076923077" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.75s" dur="1">
                        </animate></rect><rect ng-attr-x="{{38.46153846153846 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="4.08943" fill="#849b87" x="35.46153846153846" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.08333333333333333s" dur="1">
                        </animate></rect><rect ng-attr-x="{{46.15384615384615 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="10.4173" fill="#e15b64" x="43.15384615384615" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.25s" dur="1">
                        </animate></rect><rect ng-attr-x="{{53.84615384615385 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="19.945" fill="#f47e60" x="50.84615384615385" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.4166666666666667s" dur="1">
                        </animate></rect><rect ng-attr-x="{{61.53846153846154 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="28.3615" fill="#f8b26a" x="58.53846153846154" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.8333333333333334s" dur="1">
                        </animate></rect><rect ng-attr-x="{{69.23076923076923 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="5.00829" fill="#abbd81" x="66.23076923076923" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.16666666666666666s" dur="1">
                        </animate></rect><rect ng-attr-x="{{76.92307692307692 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="20.6302" fill="#849b87" x="73.92307692307692" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5s" dur="1">
                        </animate></rect><rect ng-attr-x="{{84.61538461538461 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="17.4689" fill="#e15b64" x="81.61538461538461" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.3333333333333333s" dur="1">
                        </animate></rect><rect ng-attr-x="{{92.3076923076923 - config.width/2}}" y="36" ng-attr-width="{{config.width}}" height="19.572" fill="#f47e60" x="89.3076923076923" width="6">
                        <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.9166666666666666s" dur="1">
                        </animate></rect></g></svg>

                        </div>
                              
                        
                        <MenuLinks menuStatus={menuStatus}/>
                        
                </div>
                { isSearchInputActive ? <SearchBar /> : <div></div> }
            </div>
        ) 
    }
}

export default Menu;
