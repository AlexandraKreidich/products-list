import { ProductItem } from './../shared/models/ProductItem';
export const ProductItemsService = {
  fetchItems: async () => {
    var data = await fetch(
      `./products.csv`,
      {
        method: 'GET',
      })
      .then(async response => ProductItemsService.parseCsv(await response.text()));

    return data;
  },

  parseCsv: (text: string): ProductItem[] => {
    const start = performance.now();
    const table = text.split(/\n/).slice(1);
    let productItems: ProductItem[] = [];
    table.forEach(row => {
      const columns = row.split('"').slice(0, 1);
      const itemsData = columns[0].split(',');
      let additionalImages = '';
      if (columns.length === 2) {
        additionalImages = columns[1];
      }
      const item = new ProductItem(
        itemsData[0],
        itemsData[1],
        itemsData[2],
        parseFloat(itemsData[3]),
        parseFloat(itemsData[4]),
        itemsData[5],
        additionalImages.split(',')
      );
      productItems.push(item);
    })

    console.log(performance.now() - start);

    return productItems;
  }
}