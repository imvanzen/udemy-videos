import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    
    return (
        <div className="video-detail">
            {video.snippet.title}
        </div>
    )
}

export default VideoDetail;
