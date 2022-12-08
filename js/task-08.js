const submitField = document.querySelector(".login-form");
submitField.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget.elements;

  if (!form.email.value || !form.password.value) {
    alert("Fill the field!");
  }

  const formSaves = new FormData(event.currentTarget);

  console.log(formSaves);
  submitField.reset();
}