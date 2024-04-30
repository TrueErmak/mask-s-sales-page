import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-modal-image';
import './styles.css';

const chessSets = [
  {
    id: 1,
    title: '3d printed head for cosplay wigs',
    images: ['/images/mankin 1.jpg',
    '/images/manikin 2.jpg',
    '/images/manikin 3.jpg',
    '/images/manikin 4.jpg',
    '/images/manikin 5.jpg'
  ],
    videos: [ ],
    description: 'this was 3d printed for cosplaying this can be a cheaper alternative to bying one in the store.',
  },
  {
    id: 2,
    title: 'ony devil mask',
    images: [
      '/images/ony 1.jpg',
      '/images/ony 2.jpg',
      '/images/ony 3.jpg'
      
    ],
    videos: [ ],
    description: 'this was realy fun to make let me know if you want one for yourself. ',
  },
  
];


function ChessSet({ title, images, videos, description }) {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true to display images by default
  const [currentMedia, setCurrentMedia] = useState(images[0]); // Set the first image as the initial current media
  const [currentMediaType, setCurrentMediaType] = useState('image'); // Set the initial media type to image

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chess-set">
      <h2>{title}</h2>
      <button onClick={toggleDropdown}>{isOpen ? 'Hide Media' : 'View Media'}</button>
      {isOpen && (
        <div>
          <ul className="dropdown-menu">
            {images.map((image, index) => (
              <li key={index} onClick={() => { setCurrentMedia(image); setCurrentMediaType('image'); }}>
                View Image {index + 1}
              </li>
            ))}
            {videos.map((video, index) => (
              <li key={index} onClick={() => { setCurrentMedia(video); setCurrentMediaType('video'); }}>
                View Video {index + 1}
              </li>
            ))}
          </ul>
          {currentMedia && (
            <div style={{ marginTop: '10px' }}>
              {currentMediaType === 'image' ? (
                <img
                  src={currentMedia}
                  alt={`${title} Display`}
                  style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                  onClick={() => {
                    <Lightbox small={currentMedia} large={currentMedia} alt={`${title} Image`} onCloseRequest={() => setCurrentMedia(images[0])} />;
                  }}
                />
              ) : (
                <video controls style={{ width: '100%', height: 'auto' }}>
                  <source src={currentMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}


function App() {
  const aboutMeUrl = "https://eric-canada.vercel.app/";

  return (
    <div className="app">
      {chessSets.map((set) => (
        <ChessSet key={set.id} {...set} />
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href={aboutMeUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            meet the creator 
          </button>
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
