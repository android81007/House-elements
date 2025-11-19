export const getSection = (num) => {
  const span = document.querySelector(`span[data-number="${num}"]`);

  if (!span) return null;

  const box = span.closest(".box");

  return box.dataset.section;
};

