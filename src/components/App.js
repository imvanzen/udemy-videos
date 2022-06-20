import React from "react";
import youtube from "../api/youtube"
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            q: term
        });
        this.setState({videos: response.data.items});
    }

    render() {
        return (
            <div className="app ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App;
