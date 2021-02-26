import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import VideoList from '../components/VideoList/VideoList';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import useVideos from '../hooks/fetch-videos';

// import youtube from '../apis/youtube';

// const KEY = 'AIzaSyC--6WblZuUtTR7pScu9hRbzIMvWf5KbyA';

const App = () => {
  const [videos, search] = useVideos('buildings');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
 

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
