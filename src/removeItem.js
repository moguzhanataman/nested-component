const removeItem = (source, id) => {
  console.log({ source });

  if (!source.items) {
    return source;
  }
  // base case
  let results = source;

  const foundIndex = source.items.findIndex((d) => d.id === id);
  if (foundIndex > -1) {
    results.items = results.items.filter((d) => d.id !== id);
    return results;
  }

  // recursive case
  let resultItems = [];
  for (let index = 0; index < source.items.length; index++) {
    const newSource = source.items[index];
    resultItems.push(removeItem(newSource, id));
  }
  results.items = resultItems;

  return results;
};

export default removeItem;
