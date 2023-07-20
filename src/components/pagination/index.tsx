import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

import { ArrowButton, Container, NumButton } from './styles';

import { PaginationProps } from './types';

export const Pagination = ({
  hasPreviousPage,
  hasNextPage,
  page,
  pageCount,
  handleChangePage
}: PaginationProps) => {
  function handlePreviousPage() {
    if (hasPreviousPage) {
      handleChangePage(page - 1);
    }
  }

  function handleNextPage() {
    if (hasNextPage) {
      handleChangePage(page + 1);
    }
  }
  return (
    <Container>
      <ArrowButton onClick={handlePreviousPage} disabled={!hasPreviousPage}>
        <ArrowLeftIcon height="1rem" width="1rem" />
      </ArrowButton>

      <NumButton disabled>{page}</NumButton>

      <ArrowButton onClick={handleNextPage} disabled={!hasNextPage}>
        <ArrowRightIcon height="1rem" width="1rem" />
      </ArrowButton>
    </Container>
  );
};
