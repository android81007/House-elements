export const finishForm = () => {
  const form = document.querySelector(".login-form");

  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "text");
  loginInput.setAttribute("name", "login");

  form.prepend(loginInput);

  const passwordInput = form.children[1];
  passwordInput.type = "password";
};

