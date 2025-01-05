import React from 'react';

const Main = ({ data }) => {
  const isVideo = data.media_type === 'video';
  
  return (
    <div className="imgContainer">
      {isVideo ? (
        <iframe
          className="bgimage"
          src={data.url.replace('youtube.com/watch?v=', 'youtube.com/embed/')}
          title={data.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        
        <img 
          className="bgimage" 
          src={data.hdurl || data.url} 
          alt={data.title || 'APOD media'} 
        />
      )}
      <div className="bgGradient" />
    </div>
  );
};

export default Main;