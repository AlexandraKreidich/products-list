export const SearchService = {
  fetchItems: async (title: string, id: string) => {
    var data = await fetch(
      `products.csv`,
      {
        method: 'GET',
      })
      .then(response => response.text);

    return data;
  }
}