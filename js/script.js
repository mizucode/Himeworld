// let navigation = document.querySelector(".navigation");
let music = new Audio("../src/shogun.mp3");
const buttons = document.querySelectorAll("ion-icon");

// navigation.onclick = function () {
//     navigation.classList.toggle("active");
// };

// document.addEventListener("click", function (e) {
//     if (!navigation.contains(e.target)) {
//         navigation.classList.remove("active");
//     }
// });

// Bottom Bar
function change(item) {
    buttons.forEach(function (obj) {
        obj.classList.remove("active");
    });
    item.classList.add("active");
}

function playMusic() {
    music.play();
}

function stopMusic() {
    music.pause();
}
