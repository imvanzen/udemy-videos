import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const videosList = videos.map(video => (
        <VideoItem key={video.id.videoId} video={video} />
    ));
    return (
        <div className='video-list'>
            {videosList}
        </div>
    )
}

export default VideoList;
