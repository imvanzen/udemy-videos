import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({
    videos,
    onVideoSelect
}) => {
    const videosList = videos.map(video => (
        <VideoItem onClick={() => {
            return onVideoSelect(video);
        }} key={video.id.videoId} video={video} />
    ));
    return (
        <div className='video-list ui relaxed divided list'>
            {videosList}
        </div>
    )
}

export default VideoList;
