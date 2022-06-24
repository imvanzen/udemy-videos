import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    return (
        <div className='video-list'>
            I have {videos.length} videos.
        </div>
    )
}

export default VideoList;
