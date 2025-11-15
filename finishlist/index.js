export const finishList = (text, prep) => {
  const elementUl = document.querySelector(".list");
  const klass = document.querySelector(".special");

  const elementOne = document.createElement("li");
  elementOne.textContent = "1";

  const elemenFour = document.createElement("li");
  elemenFour.textContent = "4";

  const elementSix = document.createElement("li");
  elementSix.textContent = "6";

  const elementEight = document.createElement("li");
  elementEight.textContent = "8";

  elementUl.prepend(elementOne);
  elementUl.append(elementEight);

  klass.before(elemenFour);
  klass.after(elementSix);
};


