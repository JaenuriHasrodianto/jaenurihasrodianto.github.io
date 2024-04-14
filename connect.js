const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jaenuri.hasro@gmail.com",
    Password: "82389FF06A15624D26592F731E6226233E95",
    To: "jaenuri.hasro@gmail.com",
    From: "jaenuri.hasro@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
