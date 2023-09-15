var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.querySelector(".close");

function openModal(){
    modal.style.display = "block";
}

function hideModal(){
    modal.style.display = "none";
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', hideModal);

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        hideModal();
    }
});
