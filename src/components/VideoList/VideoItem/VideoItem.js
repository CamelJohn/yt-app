import css from './VideoItem.module.css';

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div className={`item ${css.VideoItem }`} onClick={ () => onVideoSelect(video)}>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.description}/>
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
