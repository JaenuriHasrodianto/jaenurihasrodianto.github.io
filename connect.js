const form = document.querySelector("form");
const nama = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = "Nama Lengkap: ${nama.value}<br> Email: ${email.value}<br> Pesan: ${mess.value}";
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jaenuri.hasro@gmail.com",
    Password: "82389FF06A15624D26592F731E6226233E95",
    To: "jaenuri.hasro@gmail.com",
    From: "jaenuri.hasro@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then(
    message => {
    if (message == "OK") {
      Swal.fire({
        title: "SUCCESS!",
        text: "anda berhasil mengirim pesan!<br> kami akan segera mengirim pesan ke email and!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Masukan email yang benar!";
    } else {
      errorTxtEmail.innerText = "input gak boleh kosong yaa!";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!nama.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
    console.log("OK")
});
