import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            placeholder: 'Search by Genre..',
        };
    }


    componentDidUpdate(){
        if (this.input) {
            this.input.focus();
        }
    }
    // updateSearch(e){
    //     this.setState({ term: e.target.value.substr(0,20)});
        
    // render() {
    //     const tempStyle = {
    //         color: '#000',
    //     };

    //     if (this.state.isSearchInputActive) {
    //         return (
    //             <form onSubmit={(e) => this.handleSubmit(e)}>
    //                 <input
    //                     placeholder={this.state.placeholder}
    //                     ref={e => this.input = e}
    //                     className="search_toolbar"
    //                     style={tempStyle}
    //                     value={this.state.term}
    //                     onChange={e => this.setState({ term: e.target.value })}
    //                 />
    //             </form>
    //         );
    //      } else {
    //         return <div className="fa fa-search search_toolbar" onClick={this.toggleSearchBar}></div>
    //      } 

    // }

    handleSubmit(e){
        e.preventDefault();


        this.props.searchBarCallBack(this.state.term);
        this.props.search(this.state.term)

        // this.props.history.push('')
    }

    onInputChange(term) {
        this.setState({ term });
    }

    render() {
        const tempStyle = {
            color: '#A9A9A9',
            fontSize:13,
        };

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <input
                        placeholder={this.state.placeholder}
                        ref={e => this.input = e}
                        className="search_toolbar_popdown"
                        style={tempStyle}
                        value={this.state.term}
                        onChange={e => this.onInputChange(e.target.value)}
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar;
