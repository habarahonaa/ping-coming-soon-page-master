// @flow

function main(): void {
  // DOM elements
  const emailForm: HTMLElement = document.querySelector("#subscribe__form");
  const emailInput: HTMLFormElement = document.querySelector(".emailInput");
  const formButton: HTMLFormElement = document.querySelector(".form__btn");
  const helpText: HTMLElement = document.querySelector(".form__help");

  // Validates email and calls update function on element
  const isEmail = (formEmail): boolean => {
    const regex = /^(\w*[@]{1}\w*\.{1}\w{2,5})/;
    if (!formEmail.value) {
      invalidElement(formEmail, true);
      return false;
    } else if (formEmail.value && regex.test(formEmail.value)) {
      return true;
    } else {
      invalidElement(formEmail, false);
      return false;
    }
  };

  const invalidElement = (formEmail: HTMLElement, noEmail: boolean): void => {
    formEmail.classList.add("is-invalid");
    formButton.classList.add("form__btn--disabled");
    if (noEmail) {
      helpText.textContent =
        "Whoops! It looks like you forgot to add your email";
      helpText.classList.remove("is-hidden");
    } else {
      helpText.textContent = "Please provide a valid email address";
      helpText.classList.remove("is-hidden");
    }
  };

  function preventSubmit(e): void {
    e.preventDefault();
    if (isEmail(emailInput)) {
      emailForm.submit();
    }
  }

  emailForm.addEventListener("submit", preventSubmit);
}

main();
