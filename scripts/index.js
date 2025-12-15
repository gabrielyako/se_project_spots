const editProfilebutton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");

const newPostButton = document.querySelector(".profile__add-button");
const newPostmodal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostmodal.querySelector(".modal__close-button")

editProfilebutton.addEventListener("click" , function () {
    editProfileModal.classList.add("modal_is-opened");
} );

editProfileCloseButton.addEventListener("click" , function () {
    editProfileModal.classList.remove("modal_is-opened");
} );

newPostButton.addEventListener("click" , function () {
    newPostmodal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click" , function () {
    newPostmodal.classList.remove("modal_is-opened");
});


