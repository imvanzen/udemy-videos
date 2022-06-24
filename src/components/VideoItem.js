import React from "react";
const VideoItem = ({video}) => {
    const {
        snippet: {
            title,
            thumbnails
        }
    } = video;

    return (
        <div className="video-item item">
            <img src={thumbnails.medium.url} />
            {title}
        </div>
    )
}

export default VideoItem;
