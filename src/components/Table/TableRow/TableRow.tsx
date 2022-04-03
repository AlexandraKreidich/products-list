import { ITableRowProps } from './types';
import styles from './TableRow.module.css';
import { useState } from 'react';
import AsyncImage from '../../AsyncImage';

export function TableRow(props: ITableRowProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { item } = props;
  return (
    <>
      <tr className={styles.row} onClick={() => setIsExpanded(!isExpanded)}>
        <th scope="row">{item.gtin}</th>
        <td>
          <div className={styles.title}>
            <AsyncImage src={item.imageLink} isAdditionalImage={false}></AsyncImage>
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
              <AsyncImage src={image} key={image} isAdditionalImage={true}></AsyncImage>
            )
            : 'No additional images'}
        </td>
      </tr>}
    </>
  )
}