import { rooms } from "./data.js"

document.addEventListener("DOMContentLoaded", () => {
    displayRoomContent();
    handleBgToggle();
    displayDefaultImages();
})

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('id');
const header = document.querySelector(".header");

console.log(roomId);

const displayRoomContent = () => {
    if (!roomId) return

    const room = rooms.filter((room) => room.id == roomId)[0];
    const headerBody = document.createElement("div");
    headerBody.classList.add("header-body");

    headerBody.innerHTML = `
        <h1>
            <span class="room-type">${room.type}</span>, <span class="room-title">${room.title}</span>
        </h1>
        <p class="room-description">${room.description}</p>
        <a href="#" class="book-btn">Book Room</a>
    `;

    const imageContainer = document.createElement("div")
    imageContainer.classList.add("images-container")

    imageContainer.innerHTML = room.pictures.map((picture, index) => `
        <input type="radio" name="room-preview-btn" id="room-preview-btn-${index + 1}">
        <label style="background: url(${picture}); background-position: center; background-size: cover;" for="room-preview-btn-${index + 1}"></label>
    `).join('');


    headerBody.appendChild(imageContainer);
    header.appendChild(headerBody);
}

const handleBgToggle = () => {
    const bgBtns = document.querySelectorAll("input[name='room-preview-btn']");

    bgBtns.forEach((radio) => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                const label = this.nextElementSibling;
                const background = getComputedStyle(label).background;
                console.log(background);

                const match = background.match(/url\((['"]?)(.*?)\1\)/);
                if (match) {
                    const imageUrl = match[2];
                    header.style.background = `url(${imageUrl})`;
                    header.style.backgroundRepeat = "no-repeat";
                    header.style.backgroundSize = "cover";
                    header.style.backgroundPosition = "center";
                }
            }
        });
    });
}

const displayDefaultImages = () => {
    if (!roomId) return
    
    const bgBtns = document.querySelectorAll("input[name='room-preview-btn']");
    bgBtns[0].checked = true;

    const label = bgBtns[0].nextElementSibling;
    const background = getComputedStyle(label).background;

    const match = background.match(/url\((['"]?)(.*?)\1\)/);
    if (match) {
        const imageUrl = match[2];
        header.style.background = `url(${imageUrl})`;
        header.style.backgroundRepeat = "no-repeat";
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";
    }
}