import { rooms } from "./data.js";

const roomsContainer = document.querySelector(".rooms-container")

// console.log(rooms);

// rooms.map((room, index) => {
//     const roomcard = document.createElement("div")
//     roomcard.classList.add("hotel-card")
//     roomcard.id = index

//     roomcard.innerHTML = `
//         <img class="card-image hover-outline" src="${room.pictures[0]}">
//             <div class="info-container">
//                 <div class="title-col">
//                     <p class="card-title">Type: ${room.type}, Title: ${room.title}</p>
//                     <p class="card-info">
//                         <span>${room.roomCount} bedroom(s)</span>
//                         <span>214m</span>
//                     </p>
//                 </div>
//                 <div class="price-col">
//                     <p class="card-price">$ ${room.price}</p>
//                     <p class="card-rate">per month</p>
//                 </div>
//             </div>
//     `

//     roomsContainer.appendChild(roomcard)
// })

const filteredRooms = rooms.filter(room => room.price < 600)

filteredRooms.forEach((room) => {
    const roomcard = document.createElement("div")
    roomcard.classList.add("hotel-card")
    // roomcard.id = index

    roomcard.innerHTML = `
        <img class="card-image hover-outline" src="${room.pictures[0]}">
            <div class="info-container">
                <div class="title-col">
                    <p class="card-title">Type: ${room.type}, Title: ${room.title}</p>
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
    `

    roomsContainer.appendChild(roomcard)
})

// console.log(rooms.splice(7))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr);
console.log(arr.reduce((a, b) => a + b));

console.log("Done.")