import React, { Component } from 'react';

class MenuLinks extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: [{
                text: 'Genre',
                link: '#',
                icon: 'add me'
                },
                {
                    text: 'Sign In',
                    link: '#',
                    icon: 'add me'
                },
                {
                    text: 'By Date',
                    link: '#',
                    icon: 'add me',
                },
                {
                    text: 'By Artist',
                    link: '#',
                    icon: 'add me'
                }]
            // },{
            //     text: 'By Artist',
            //     link: '#',
            //     icon: 'add me'
            // },{
            //     text: 'By Genre',
            //     link: '#',
            //     icon: 'add me',
            // },{
            //     text: 'By Videos',
            //     link: '#',
            //     icon: 'add me'
            // },{
            //     text: 'Post Events',
            //     link: '#',
            //     icon: 'add me'
            //  }]
             }
          }
     render() {
        let links = this.state.links.map(( item, index) => <li key={index} 
        ref={index+ 1}>
          <i aria-hidden="true" className={`fa ${item.icon}`}></i>
          <a href={item.link} target="_blank">{item.text}</a>
        </li>);
        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    { links }
                </ul>
            </div>
        )
    }
}

export default MenuLinks;