import { ITableRowProps } from './types';

export function TableRow(props: ITableRowProps) {
  const { item } = props;
  return (
    <tr>
      <th scope="row">{item.gtin}</th>
      <td>{item.title}</td>
      <td>{item.gender}</td>
      <td>{item.price} {item.priceCurrency}</td>
      <td>{item.salePrice} {item.priceCurrency}</td>
    </tr>
  )
}