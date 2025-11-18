export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach((elem) => {
    const value = Number(elem.dataset.number); 
    elem.dataset.squaredNumber = value * value;
  });
};
