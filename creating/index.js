const createButton = (buttonText) => {
const neuElement = document.createElement('button');
const elemBody = document.querySelector('body');
 elemBody.append(neuElement);
 neuElement.textContent = buttonText;
};

