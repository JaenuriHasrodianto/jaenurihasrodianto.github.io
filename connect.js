const form = document.querySelector("form");
const nama = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  const bodymessage = "Nama Lengkap: ${nama.value}<br> Email: ${email.value}<br> Pesan: ${mess.value}";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jaenuri.hasro@gmail.com",
    Password: "82389FF06A15624D26592F731E6226233E95",
    To: "jaenuri.hasro@gmail.com",
    From: "jaenuri.hasro@gmail.com",
    Subject: nama.value,
    Body: bodymessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
