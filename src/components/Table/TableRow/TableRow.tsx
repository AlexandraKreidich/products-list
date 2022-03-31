import { ITableRowProps } from './types';
import styles from './TableRow.module.css';

export function TableRow(props: ITableRowProps) {
  const { item } = props;
  return (
    <tr>
      <th scope="row">{item.gtin}</th>
      <td>
        <div className={styles.title}>
          <img src={item.imageLink} alt='product' className="img-thumbnail"></img>
          <p>{item.title}</p>
        </div>
      </td>
      <td>{item.gender}</td>
      <td>{item.price} {item.priceCurrency}</td>
      <td>{item.salePrice} {item.priceCurrency}</td>
    </tr>
  )
}