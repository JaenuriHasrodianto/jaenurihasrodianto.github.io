const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const checkName = () => {
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameInput.parentElement.classList.add("error");
  } else {
    nameInput.classList.remove("error");
    nameInput.parentElement.classList.remove("error");
  }
};

const checkEmail = () => {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-text.email");
  if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add("error");
    emailInput.parentElement.classList.add("error");
    if (emailInput.value !== "") {
      errorTxtEmail.innerText = "Masukan email yang benar!";
    } else {
      errorTxtEmail.innerText = "input gak boleh kosong yaa!";
    }
  } else {
    emailInput.classList.remove("error");
    emailInput.parentElement.classList.remove("error");
  }
};

const checkSubject = () => {
  if (subjectInput.value === "") {
    subjectInput.classList.add("error");
    subjectInput.parentElement.classList.add("error");
  } else {
    subjectInput.classList.remove("error");
    subjectInput.parentElement.classList.remove("error");
  }
};

const checkMessage = () => {
  if (messageInput.value === "") {
    messageInput.classList.add("error");
    messageInput.parentElement.classList.add("error");
  } else {
    messageInput.classList.remove("error");
    messageInput.parentElement.classList.remove("error");
  }
};

const sendEmail = () => {
  const bodyMessage = `Nama Lengkap: ${nameInput.value}<br> Email: ${emailInput.value}<br> Pesan: ${messageInput.value}`;
  Email.send({
    SecureToken: "4c41dc55-ad23-4609-b0bb-b358c6d9849a",
    To: "jaenuri.hasro@gmail.com",
    From: "jaenuri.hasro@gmail.com",
    Subject: subjectInput.value,
    Body: bodyMessage
  }).then(message => {
    if (message === "OK") {
      Swal.fire({
        title: "SUCCESS!",
        text: "anda berhasil mengirim pesan!",
        icon: "success",
      });
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  checkSubject();
  checkMessage();
  if (!nameInput.classList.contains("error") && !emailInput.classList.contains("error") && !subjectInput.classList.contains("error") && !messageInput.classList.contains("error")) {
    sendEmail();
    form.reset();
    return false;
  }
});