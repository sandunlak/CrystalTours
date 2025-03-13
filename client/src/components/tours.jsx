import React from 'react';
import video1 from '../assets/video1.mp4'; // Import video from assets folder

export default function Tours() {
  const tours = Array.from({ length: 6 }).map((_, index) => ({
    title: 'Classic Mini Tour',
    duration: '4 Days / 3 Nights',
    destinations: 'Colombo, Kandy, Dambulla, Sigiriya, Polonnaruwa, Anuradhapura',
    imageUrl: 'https://i.postimg.cc/YS3RHYhQ/Dutch-Fort-Jaffna.jpg',
  }));

  return (
    <div>
      <div
        style={{
          position: 'fit-to-screen',
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Ensure video stays in the background
          }}
          src={video1} // Set video source
          type="video/mp4"
        />

        {/* Content on top of the video */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1, // Ensure content appears above the video
            color: 'white', // Add color to make text visible
          }}
        >
          <h1>Welcome to Our Tours</h1>

          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '10px',
              marginTop: '20px',
              scrollbarWidth: 'thin', // Show thin scrollbar in Firefox
              msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
            }}
          >
            {tours.map((tour, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  padding: '10px',
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background to make text readable
                  width: '200px', // Reduced width
                  margin: '5px',
                }}
              >
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h2 style={{
                  color: '#4CAF50',
                  fontSize: '20px', // Reduced font size
                }}>{tour.title}</h2>
                <p style={{
                  fontSize: '12px', // Reduced font size
                  color: '#555',
                }}>{tour.duration}</p>
                <p style={{
                  fontSize: '12px', // Reduced font size
                  color: '#555',
                }}>{tour.destinations}</p>
                <a
                  href="#"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    margin: '5px',
                    fontSize: '14px', // Reduced font size
                    color: 'white',
                    backgroundColor: '#4CAF50',
                    textDecoration: 'none',
                    borderRadius: '5px',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >More Details</a>
                <a
                  href="#"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    margin: '5px',
                    fontSize: '14px', // Reduced font size
                    color: 'white',
                    backgroundColor: '#4CAF50',
                    textDecoration: 'none',
                    borderRadius: '5px',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >Request Quote</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
