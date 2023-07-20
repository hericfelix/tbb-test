export interface PaginationProps {
  handleChangePage: (number: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  page: number;
  pageCount: number;
}
