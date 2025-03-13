import React from 'react';
import { Link } from 'react-router-dom';
import myVideo from '../assets/video.mp4';

export default function BackVideo() {
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
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of the video */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1, // Ensure content appears above the video
            color: 'white',
          }}
        >
          <div style={{ marginTop: '150px', fontSize: '1.4rem' }}>
            <h1>SRI LANKA</h1>
          </div>
          <Link
            to="/tours"
            style={{
              textDecoration: 'none', // Remove underline from the link
            }}
          >
            <button
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                fontSize: '1.5rem',
                backgroundColor: 'transparent',
                border: '2px solid white',
                borderRadius: '40px',
                cursor: 'pointer',
                color: 'white',
                transition: 'all 0.5s ease', // Smooth transition when hovering over the button
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; // Slightly enlarge button on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset the button size when hover ends
              }}
            >
              Explore
            </button>
          </Link>
        </div>

        {/* Scroll Icon */}
        <div
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            textAlign: 'center',
            color: 'white',
            fontSize: '1.2rem',
            zIndex: 1,
          }}
        >
          <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            SCROLL
          </div>
          <div style={{ width: '2px', height: '50px', backgroundColor: 'white', margin: '10px auto' }}></div>
        </div>
      </div>

      {/* New Section with Background Color */}
      
      <div
      
  style={{
    position: 'relative absolute',
    width: '80vw',
    height: '100vh',
    backgroundColor: 'white',
    marginTop:'-47px',
    marginLeft:'-30px',
    paddingTop: '30px',
      
      
    width: '100%',
    height: '100%',
    zIndex: -1,
     // Ensure it is above the previous section

  }}
  
>
  {/* Welcome Text */}
  <h1 style={{marginTop: '50px', marginBottom: '20px', fontSize: '2.6rem', fontWeight: 'bold', textAlign: 'center',color:'#222222' }}>
    Welcome to our Tours
  </h1>
  {/* Title */}
  <h1 style={{ marginBottom: '30px', fontSize: '1rem', fontWeight: 'bold',color:'silver' }}>
  Explore our top-rated experiences and create unforgettable moments that you'll cherish forever.
  </h1>

  {/* Destination cards container */}
  <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '60px',
    width: '90%', // Adjust width to fit within the viewport
    height:'50%',
      maxWidth: '1200px', // Set a max width for larger screens
      margin: '0 auto', // Center the grid container
      padding: '0 20px', // Add padding to the sides
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for zoom and shadow
    cursor: 'pointer', // Change cursor to pointer on hover
  }}
>
  {/* Destination Cards */}
  {[
    {
      title: 'Sigiriya Tour',
      location: 'Sigiriya Srilanka',
      reviews: '4.9 (128 reviews)',
    },
    {
      title: 'Safari Adventure',
      location: 'Habacron/Pala',
      reviews: '4.8 (89 reviews)',
    },
    {
      title: 'Ancient Ruins Tour',
      location: 'Polomorraver/AmundiRoguraya',
      reviews: '5 (156 reviews)',
    },
    {
      title: 'Sigiriya Tour',
      location: 'Sigiriya Srilanka',
      reviews: '4.9 (128 reviews)',
    },
    {
      title: 'Safari Adventure',
      location: 'Habacron/Pala',
      reviews: '4.8 (89 reviews)',
    },
    {
      title: 'Ancient Ruins Tour',
      location: 'Polomorraver/AmundiRoguraya',
      reviews: '5 (156 reviews)',
    }
  ].map((destination, index) => (
    <div
      key={index}
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        
    cursor: 'pointer', // Change cursor to pointer on hover
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; // Zoom effect
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Enhanced shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Reset zoom
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Reset shadow
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundImage: `url(https://via.placeholder.com/300)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Card content */}
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          {destination.title}
        </h3>
        <p style={{ marginBottom: '5px', fontSize: '1rem', color: '#555' }}>
          {destination.location}
        </p>
        <p style={{ marginBottom: '10px', color: 'gold', fontSize: '0.9rem' }}>
          ⭐⭐⭐⭐⭐ {destination.reviews}
        </p>
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: 'black',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          View Details →
        </button>
      </div>
    </div>
    
  ))}
</div>
{/* view all button */}
<Link
  to="/all-destinations" // Replace with the path you want to navigate to
  style={{
    textDecoration: 'none', // Remove underline from the link
    display: 'block', // Make it a block element for better spacing
    textAlign: 'center', // Center the text
    marginTop: '50px', // Add margin at the top
    marginBottom: '20px', // Add margin at the bottom
    fontSize: '1rem', // Adjust font size
    fontWeight: 'bold', // Make the text bold
    color: '#222222', // Text color
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#007BFF'; // Change text color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#222222'; // Reset text color
  }}
>
  View All Destinations →
</Link>



</div>



    </div>

    
  );
}
