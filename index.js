document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  function firstNameHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/^[A-Za-z]+$/)) {
      event.target.setCustomValidity("Hanya huruf yang diizinkan");
    }
  }

  const firstNameInput = form.querySelector('input[name="firstName"]');
  firstNameInput.addEventListener(
    "invalid",
    firstNameHandler.bind(firstNameInput)
  );

  const lastNameInput = form.querySelector('input[name="lastName"]');
  lastNameInput.addEventListener(
    "invalid",
    lastNameHandler.bind(lastNameInput)
  );

  function lastNameHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/^[A-Za-z]+$/)) {
      event.target.setCustomValidity("Hanya huruf yang diizinkan");
    }
  }

  const phoneInput = form.querySelector('input[name="phone"]');
  phoneInput.addEventListener("invalid", phoneHandler.bind(phoneInput));

  function phoneHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/^62[0-9]{9,}$/)) {
      event.target.setCustomValidity(
        "Hanya angka yang diizinkan dan dimulai dari 62"
      );
    }
  }

  const emailInput = form.querySelector('input[name="email"]');
  emailInput.addEventListener("invalid", emailHandler.bind(emailInput));

  function emailHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/^62[0-9]{9,}$/)) {
      event.target.setCustomValidity(
        "Hanya angka yang diizinkan dan dimulai dari 62"
      );
    }
  }

  const passwordInput = form.querySelector('input[name="password"]');
  passwordInput.addEventListener(
    "invalid",
    passwordHandler.bind(passwordInput)
  );

  function passwordHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/)) {
      event.target.setCustomValidity(
        "Hanya angka yang diizinkan dan dimulai dari 62"
      );
    }
  }

  const verPasswordInput = form.querySelector('input[name="confirmPassword"]');
  verPasswordInput.addEventListener(
    "invalid",
    verPasswordHandler.bind(verPasswordInput)
  );

  function verPasswordHandler(event) {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
    } else if (!event.target.value.match(/^62[0-9]{9,}$/)) {
      event.target.setCustomValidity(
        "Hanya angka yang diizinkan dan dimulai dari 62"
      );
    }
  }
});
