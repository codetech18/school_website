import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAxRSh6llNcGLKoXC3hldUTxpygW-N-xf8",
  authDomain: "schoolwebsite-2c126.firebaseapp.com",
  projectId: "schoolwebsite-2c126",
  storageBucket: "schoolwebsite-2c126.appspot.com",
  messagingSenderId: "961681962369",
  appId: "1:961681962369:web:48ffad5b863876df9e2480",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};

loginBtn.onclick = () => {
  registerBtn.classList.remove("active");
  loginBtn.classList.add("active");
  document.querySelector(".account-form .login-form").classList.add("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
};

let accountForm = document.querySelector(".account-form");

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};

// firebase auth code

document.getElementById("login-btn").addEventListener("click", function () {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "block";
      registerBtn.style.display = "none";
      loginBtn.style.display = "none";
      document
        .querySelector(".account-form .login-form")
        .classList.remove("active");
      document
        .querySelector(".account-form .register-form")
        .classList.remove("active");
      document.getElementById("result").innerHTML =
        "Heyy, welcome back <br>" + loginEmail;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "block";
      registerBtn.style.display = "none";
      loginBtn.style.display = "none";
      document
        .querySelector(".account-form .login-form")
        .classList.remove("active");
      document
        .querySelector(".account-form .register-form")
        .classList.remove("active");
      document.getElementById("result").innerHTML = "sorry <br>" + errorMessage;
    });
});

document.getElementById("register-btn").addEventListener("click", function () {
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "block";
      registerBtn.style.display = "none";
      loginBtn.style.display = "none";
      document
        .querySelector(".account-form .login-form")
        .classList.remove("active");
      document
        .querySelector(".account-form .register-form")
        .classList.remove("active");
      document.getElementById("result").innerHTML =
        "welcome <br>" + registerEmail + " registerd succesfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "block";
      registerBtn.style.display = "none";
      loginBtn.style.display = "none";
      document
        .querySelector(".account-form .login-form")
        .classList.remove("active");
      document
        .querySelector(".account-form .register-form")
        .classList.remove("active");
      document.getElementById("result").innerHTML = "sorry <br>" + errorMessage;
    });
});

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

// var swiper = new Swiper(".home-courses-slider", {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 20,
//     breakpoints: {
//         0: {
//             slidesPerVeiw: 1,
//         },
//         768: {
//             slidesPerVeiw: 2,
//         },
//         991: {
//             slidesPerVeiw: 3,
//         },
//     },
// });

var swiper = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",

    breakpoints: {
      0: {
        slidesPerVeiw: 1,
      },
      768: {
        slidesPerVeiw: 2,
      },
      991: {
        slidesPerVeiw: 3,
      },
    },
  },
});

let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

accordion.forEach((acco) => {
  acco.onclick = () => {
    accordion.forEach((dion) => dion.classList.remove("active"));
    acco.classList.toggle("active");
  };
});

document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
};
