import { rooms } from "./data.js"
import { roomTypes } from "./data.js"

console.log(roomTypes);


const roomsContainer = document.querySelector(".rooms-container");
const homeRoomsContainer = document.querySelector(".cards-container");
const roomsCount = document.querySelector(".rooms-count")
const roomSearchInput = document.querySelector(".room-search-input")
const roomSelectInput = document.querySelector(".room-select-input")

let filteredRooms;

document.addEventListener("DOMContentLoaded", () => {
    displayRooms(rooms);
    displayHomeRooms(rooms);

    roomSearchInput.addEventListener("input", handleInputChange)
    roomSelectInput.addEventListener("change", handleSelectChange)
})

function displayRooms(data) {
    data?.map(room => {
        const roomCard = document.createElement("a")
        roomCard.href = `view.html?id=${room.id}`;

        roomCard.innerHTML = `
        <div class="hotel-card">
        <img class="card-image hover-outline" src="${room.pictures[0]}">
        <div class="info-container">
        <div class="title-col">
        <p class="card-title">${room.type}, ${room.title}</p>
        <p class="card-info">
        <span>${room.roomCount} bedroom(s)</span>
        <span>214m</span>
        </p>
        </div>
        <div class="price-col">
        <p class="card-price">$ ${room.price}</p>
                    <p class="card-rate">per month</p>
                </div>
                </div>
            </div>
        `
        roomsContainer?.appendChild(roomCard);
    })

    if (roomsCount) roomsCount.textContent = data.length;
}

function displayHomeRooms(data) {
    data?.slice(0, 5)?.map(room => {
        const roomCard = document.createElement("a")
        roomCard.href = `view.html?id=${room.id}`;

        roomCard.innerHTML = `
        <div class="hotel-card">
        <img class="card-image hover-outline" src="${room.pictures[0]}">
        <div class="info-container">
        <div class="title-col">
        <p class="card-title">${room.type}, ${room.title}</p>
        <p class="card-info">
        <span>${room.roomCount} bedroom(s)</span>
        <span>214m</span>
        </p>
        </div>
        <div class="price-col">
        <p class="card-price">$ ${room.price}</p>
                    <p class="card-rate">per month</p>
                </div>
                </div>
            </div>
        `
        homeRoomsContainer?.appendChild(roomCard);
    })

    roomsCount.textContent = data.length;
}

function handleInputChange(e) {
    const value = e.target.value.trim().toLowerCase()

    filteredRooms = rooms.filter((room) => JSON.stringify(room).trim().toLowerCase().includes(value))
    roomsContainer.innerHTML = ''
    displayRooms(filteredRooms);
}

function handleSelectChange(e) {
    const value = e.target.value

    filteredRooms = rooms.filter((room) => room.type === value)
    roomsContainer.innerHTML = ''
    displayRooms(filteredRooms);
}