import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../app/context';
import Pagination from '../Pagination';
import TableRow from './TableRow';
import styles from './Table.module.css';

export function Table() {
  const { state } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 100;

  useEffect(() => {
    setCurrentPage(1);
  }, [state.filter])


  const onPageChange = (value: number): void => {
    setCurrentPage(value);
  }

  const items = state.filteredItems.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
  return (
    <div className={styles.container}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Gtin</th>
            <th scope="col">Title</th>
            <th scope="col">Gender</th>
            <th scope="col">Price</th>
            <th scope="col">Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? items.map((item, index) => {
            return <TableRow item={item} key={index}></TableRow>
          }) : <tr><td colSpan={5}>No items</td></tr>}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsAmount={state.filteredItems.length}
        recordsPerPage={recordsPerPage}
        onPageChange={onPageChange}
      ></Pagination>
    </div>
  )
}