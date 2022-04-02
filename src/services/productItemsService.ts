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
    const table = text.split(/\n/).slice(1);
    let productItems: ProductItem[] = [];
    table.forEach(row => {
      if (row.length > 0) {
        const columns = row.split(',');
        let additionalImages: string[] = [];
        if (columns.length > 6) {
          additionalImages = columns.slice(6);
          additionalImages = additionalImages.map(image => image.trim().replace(/"/, ''));
        }
        const price = parseFloat(columns[4].split(' ')[0]);
        const salePrice = parseFloat(columns[3].split(' ')[0]);
        const item = new ProductItem(
          columns[0],
          columns[1],
          columns[2],
          price,
          salePrice,
          columns[3].split(' ')[1],
          columns[5],
          additionalImages
        );
        productItems.push(item);
      }
    })
    return productItems;
  }
}