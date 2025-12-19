const editProfilebutton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form")
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostButton = document.querySelector(".profile__add-button");
const newPostmodal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostmodal.querySelector(".modal__close-button");
const newPostForm = newPostmodal.querySelector(".modal__form");
const newPostImageLink = newPostmodal.querySelector("#card-image-input");
const newPostDescriptionInput = newPostmodal.querySelector("#post-description-input");

const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__description");



editProfilebutton.addEventListener("click" , function () {
    editProfileNameInput.value = profileNameElement.textContent;
    editProfileDescriptionInput.value = profileJobElement.textContent;
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

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameElement.textContent = editProfileNameInput.value;
    profileJobElement.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit" , handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  
  console.log(newPostImageLink.value);
  console.log(newPostDescriptionInput.value);
 
  newPostmodal.classList.remove("modal_is-opened");
}
 


newPostForm.addEventListener("submit", handleAddcardsubmit);


