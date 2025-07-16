import React, { useState, useEffect } from 'react';
import { rooms, roomTypes } from '../data';
import Header from '../components/Header';
import HotelCard from '../components/HotelCard';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import '../styles/global.css';

const Home = () => {
  // State for filtered rooms
  const [displayRooms, setDisplayRooms] = useState(rooms.slice(0, 5));

  return (
    <div className="home-page">
      <Header />

      <section className="cards-section">
        <h2>Hotels In Your Area</h2>
        <div className="cards-container">
          {displayRooms.map(room => (
            <HotelCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="pitch-section">
        <div className="pitch-section__col">
          <p className="pitch-header">See it all</p>
          <p className="pitch-main">From local hotels to global brands...</p>
        </div>
        <div className="pitch-section__col">
          <p className="pitch-header">Compare right here</p>
          <p className="pitch-main">No need to search anywhere else...</p>
        </div>
        <div className="pitch-section__col">
          <p className="pitch-header">Get exclusive rates</p>
          <p className="pitch-main">We've special deals with the world's...</p>
        </div>
      </section>

      <section className="browse">
        <div className="browse__header">
          <h3>Browse by property type</h3>
          <p>You can easily browse and filter your search by property type...</p>
        </div>
        <div className="browse__body">
          {roomTypes.map((property, index) => (
            <PropertyCard 
              key={index}
              type={property.title}
              image={property.img}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-wrapper">
          <div className="cta__col1">
            <h4>Stay in the know</h4>
            <p>Sign up to get marketing emails from Bookme.com...</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
            </form>
            <small>You can opt out anytime. See our <a href="#">privacy statement.</a></small>
          </div>
          <div className="cta__col2">
            <div className="cta__col2__head">
              <h5>Trending destinations</h5>
              <p>Most popular choices for travelers from Iran.</p>
            </div>
            <div className="cta__col2__body">
              {['Dubai', 'Tbilisi', 'Istanbul', 'Paris', 'Taiwan'].map((city) => (
                <div key={city} className="cta__col2__body__card hover-outline">
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;