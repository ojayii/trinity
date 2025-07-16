import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { rooms } from '../data';
import Header from '../components/Header';
import '../styles/view.css';

const View = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [currentBg, setCurrentBg] = useState('');
  const headerRef = React.useRef(null);

  useEffect(() => {
    // Find the room by ID
    const foundRoom = rooms.find(r => r.id.toString() === id);
    setRoom(foundRoom);
    
    // Set initial background if room exists
    if (foundRoom && foundRoom.pictures.length > 0) {
      setCurrentBg(foundRoom.pictures[0]);
    }
  }, [id]);

  const handleBgChange = (imageUrl) => {
    setCurrentBg(imageUrl);
  };

  if (!room) return <div>Loading...</div>;

  return (
    <div className="view-page">
      <header 
        className="header" 
        ref={headerRef}
        style={{
          background: `url(/${currentBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <Header /> */}
        
        <div className="header-body">
          <h1>
            <span className="room-type">{room.type}</span>,{' '}
            <span className="room-title">{room.title}</span>
          </h1>
          <p className="room-description">{room.description}</p>
          <a href="#" className="book-btn">Book Room</a>

          <div className="images-container">
            {room.pictures.map((picture, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="room-preview-btn"
                  id={`room-preview-btn-${index + 1}`}
                  checked={currentBg === picture}
                  onChange={() => handleBgChange(picture)}
                />
                <label
                  htmlFor={`room-preview-btn-${index + 1}`}
                  style={{ 
                    background: `url(/${picture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default View;