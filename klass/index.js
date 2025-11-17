export const manageClasses = () => {
  const oneKlass = document.querySelector(".one");
  oneKlass.classList.add("selected");

  const twoKlass = document.querySelector(".two");
  twoKlass.classList.remove("selected");

  const threeKlass = document.querySelector(".three");
  threeKlass.classList.toggle("three_done");

  const fourKlass = document.querySelector(".four");
  if (fourKlass.classList.contains("some-class")) {
    fourKlass.classList.add("another-class");
  }
};


