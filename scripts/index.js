const initialCards = [
    {
        name: "Golden Gate Bridge",
        link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
    },
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    },
];


const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form"); 
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageLink = newPostModal.querySelector("#card-image-input");
const newPostDescriptionInput = newPostModal.querySelector("#post-description-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardImageElement.src = data.link.trim();
  cardImageElement.alt = data.name;
  cardTitleElement.textContent = data.name;

  
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  
  cardDeleteButton.addEventListener("click", () => {
    cardDeleteButton.closest(".card").remove();
  });

  
  const previewModal = document.querySelector("#preview-modal");
  const previewImage = previewModal.querySelector(".modal__image");
  const previewCaption = previewModal.querySelector(".modal__caption");

  cardImageElement.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}


function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}


editProfileButton.addEventListener("click", function () { 
    editProfileNameInput.value = profileNameElement.textContent;
    editProfileDescriptionInput.value = profileDescriptionElement.textContent;
    openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
    closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
    closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameElement.textContent = editProfileNameInput.value;
    profileDescriptionElement.textContent = editProfileDescriptionInput.value;
     closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  
  const newCardData = {
    name: newPostDescriptionInput.value,
    link: newPostImageLink.value
  };

   const card = getCardElement(newCardData);
  
  card.querySelector(".card__image").src = newCardData.link;
  card.querySelector(".card__image").alt = newCardData.name;
  card.querySelector(".card__title").textContent = newCardData.name;
  
  
  const cardsList = document.querySelector(".cards__list");
  cardsList.prepend(card); 

  newPostForm.reset();
  
  
 closeModal(newPostModal);
}
 

newPostForm.addEventListener("submit", handleAddCardSubmit);

const cardsList = document.querySelector(".cards__list");

initialCards.forEach(function (item) {
  const card = getCardElement(item);

  card.querySelector(".card__image").src = item.link;
  card.querySelector(".card__image").alt = item.name;
  card.querySelector(".card__title").textContent = item.name;

  console.log(card); 

  cardsList.appendChild(card); 
});

const previewModalCloseButton = document.querySelector("#preview-modal .modal__close-button");

previewModalCloseButton.addEventListener("click", () => {
  closeModal(document.querySelector("#preview-modal"));
});

const previewModal = document.querySelector("#preview-modal");

previewModal.addEventListener("click", (e) => {
  if (e.target === previewModal) {
    closeModal(previewModal);
  }
});


