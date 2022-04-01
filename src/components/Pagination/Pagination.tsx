import { useMemo } from 'react';
import { IPaginationProps } from './types';
import styles from './Pagination.module.css';

export function Pagination(props: IPaginationProps) {

  const numPages = useMemo(
    () => Math.ceil(props.itemsAmount / props.recordsPerPage),
    [props.itemsAmount, props.recordsPerPage]
  );

  const prevPage = () => {
    if (props.currentPage > 1) {
      props.onPageChange(props.currentPage - 1);
    }
  }

  const nextPage = () => {
    if (props.currentPage < numPages) {
      props.onPageChange(props.currentPage + 1);
    }
  }

  return (
    <nav aria-label="page navigation">
      <ul className={`${styles.pagination} pagination`}>
        <li className="page-item">
          <button onClick={prevPage} type="button" className="btn btn-outline-secondary" disabled={props.currentPage === 1}>Previous</button>
        </li>
        <li className="page-item">
          <button onClick={nextPage} type="button" className="btn btn-outline-secondary" disabled={props.currentPage === numPages}>Next</button>
        </li>
      </ul>
    </nav>
  )
}