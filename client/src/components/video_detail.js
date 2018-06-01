import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

// YT search 
const API_KEY = 'AIzaSyCcDAVsmjsSKyf65jePkCftULWyIgT0mzo';


class VideoDetail extends Component {
    constructor(props) {
        super(props);


        this.state = {
            videos: null
        }
    }

    componentDidMount() {
        YTSearch(
            { key: API_KEY, term: this.props.term},
            function(data) {
                console.log("This is the data from the YT search", data);
               
            }
        
        );
        this.setState({
            videos: this.props
        })
    }



    render(){
        const { videos } = this.state;
        if(!videos){
            return <h1>Loading..</h1>
        } else {
            
            let videoId = videos.videos[0].id;

            const url = `https://www.youtube.com/embed/${videoId}`;
            debugger;
            return(
                <div className="container-fluid">
                    <div className="row youtube-container">
                        <div className="col-xs-12">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={url}></iframe>
                            </div>
                            {/* <div className="detials">   
                                <div>{videos.videos[0].snippet.title}</div>
                                <div>{videos.videos[0].snippet.description}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default VideoDetail;