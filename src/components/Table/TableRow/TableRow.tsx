import { ITableRowProps } from './types';
import styles from './TableRow.module.css';
import { useState } from 'react';

export function TableRow(props: ITableRowProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { item } = props;
  return (
    <>
      <tr className={styles.row} onClick={() => setIsExpanded(!isExpanded)}>
        <th scope="row">{item.gtin}</th>
        <td>
          <div className={styles.title}>
            <img src={item.imageLink} alt='item' className="img-thumbnail"></img>
            <p>{item.title}</p>
          </div>
        </td>
        <td>{item.gender}</td>
        <td>{item.price} {item.priceCurrency}</td>
        <td>{item.salePrice} {item.priceCurrency}</td>
      </tr>
      {isExpanded && <tr className={styles.additionalRow}>
        <td colSpan={5}>
          {item.additionalImageLinks.length > 0 ?
            item.additionalImageLinks.map(image =>
              <img key={image} src={image} alt='item' className={`img-thumbnail ${styles.additionalImage}`}></img>
            )
            : 'No additional images'}
        </td>
      </tr>}
    </>
  )
}