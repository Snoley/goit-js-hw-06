const submitField = document.querySelector(".login-form");
submitField.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget.elements;

  if (!form.email.value || !form.password.value) {
    alert("Fill the field!");
  }
const email = form.email.value

const password = form.password.value

  const formSaves = {
  email,
  password
}

  console.log(formSaves);
  submitField.reset();
}