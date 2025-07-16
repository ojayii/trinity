import React, { useState, useEffect } from 'react';
import { rooms } from '../data';
import Header from '../components/Header';
import HotelCard from '../components/HotelCard';
import RoomFilters from '../components/RoomFilters';
import Footer from '../components/Footer';
import '../styles/rooms.css';

const Rooms = () => {
    const [filteredRooms, setFilteredRooms] = useState(rooms);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    useEffect(() => {
        let results = rooms;

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(room => (
                JSON.stringify(room).toLowerCase().includes(term))
            )
        }

        // Apply type filter
        if (typeFilter) {
            results = results.filter(room => room.type === typeFilter);
        }

        setFilteredRooms(results);
    }, [searchTerm, typeFilter]);

    return (
        <div className="rooms-page">
            <Header />

            <main className="main">
                <section className="cards-section">
                    <p>Hotels in Jakarta, Indonesia</p>
                    <p>We found <span className="rooms-count">{filteredRooms.length}</span> available rooms</p>

                    <div className="hotel-filters">
                        <RoomFilters
                            onSearchChange={setSearchTerm}
                            onTypeChange={setTypeFilter}
                        />
                    </div>

                    <div className="cards-container rooms-container">
                        {filteredRooms.map(room => (
                            <HotelCard key={room.id} room={room} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Rooms;