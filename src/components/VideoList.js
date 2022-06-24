import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    return (
        <div className='video-list'>
            I have {props.videos.length} videos.
        </div>
    )
}

export default VideoList;
