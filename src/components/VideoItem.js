import React from "react";
const VideoItem = ({video}) => {
    const {snippet: {title}} = video;

    return (
        <div className="video-item">
            {title}
        </div>
    )
}

export default VideoItem;
