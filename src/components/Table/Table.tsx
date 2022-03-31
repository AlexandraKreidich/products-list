import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../app/context';
import TableRow from './TableRow';

export function Table() {
  const { state, dispatch } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 100;

  const numPages = useMemo(
    () => Math.ceil(state.filteredItems.length / recordsPerPage),
    [state.filteredItems.length]
  );

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const items = state.filteredItems.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
  return (
    <div>
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
          {items.map((item, index) => {
            return <TableRow item={item} key={index}></TableRow>
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button onClick={prevPage} type="button" className="btn btn-light" disabled={currentPage === 1}>Previous</button>
          </li>
          <li className="page-item">
            <button onClick={nextPage} type="button" className="btn btn-light" disabled={currentPage === numPages}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}