export interface IPaginationProps {
  currentPage: number;
  itemsAmount: number;
  recordsPerPage: number;
  onPageChange: (value: number) => void;
}