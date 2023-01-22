let navigation = document.querySelector(".navigation");

navigation.onclick = function () {
    navigation.classList.toggle("active");
};

document.addEventListener("click", function (e) {
    if (!navigation.contains(e.target)) {
        navigation.classList.remove("active");
    }
});

// Bottom Bar
function change(item) {
    const buttons = document.querySelectorAll("ion-icon");
    buttons.forEach(function (obj) {
        obj.classList.remove("active");
    });
    item.classList.add("active");
}
