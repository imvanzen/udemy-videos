import React from "react";
import youtube from "../api/youtube"
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: {}
     };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items});
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="app ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;
