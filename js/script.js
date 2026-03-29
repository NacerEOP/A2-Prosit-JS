// Sélection DOM
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const error = document.getElementById("error");
const cv = document.getElementById("cv");

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const scrollBtn = document.getElementById("scrollTop");


// Transformation en majuscules
nom.addEventListener("input", () => {
  nom.value = nom.value.toUpperCase();
});


// Validation email avec regex
function isValidEmail(mail) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(mail);
}


// Validation fichier (type + taille)
cv.addEventListener("change", () => {
  const file = cv.files[0];
  if (!file) return;

  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.oasis.opendocument.text",
    "application/rtf",
    "image/jpeg",
    "image/png"
  ];

  if (!allowed.includes(file.type)) {
    error.textContent = "Format de fichier invalide";
    cv.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    error.textContent = "Fichier trop lourd (max 2Mo)";
    cv.value = "";
  } else {
    error.textContent = "";
  }
});


// Validation formulaire
form.addEventListener("submit", (e) => {
  error.textContent = "";

  if (!nom.value || !prenom.value || !email.value || !message.value) {
    e.preventDefault();
    error.textContent = "Tous les champs obligatoires doivent être remplis";
    return;
  }

  if (!isValidEmail(email.value)) {
    e.preventDefault();
    error.textContent = "Email invalide";
  }
});


// Bouton retour en haut
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Menu burger
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});