export const getSection = (num) => {
  // 1. Находим span по data-number
  const span = document.querySelector(`span[data-number="${num}"]`);

  // Защита: если span не найден
  if (!span) return null;

  // 2. Находим ближайшего родителя с классом box
  const parentBox = span.closest('.box');

  return parentBox;
};
