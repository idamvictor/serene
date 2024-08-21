export const isPresentInArrObject = (arr, id, value) => {
  const foundItem = arr.find((item) => item.id === id);
  return foundItem ? foundItem.answer === value : false;
};
