import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import styles from './Pagination.module.css';

const Pagination = ({ updatePage, currentPage, totalPages }) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      updatePage(prevPage => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (totalPages !== currentPage) {
      updatePage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        <IoIosArrowRoundBack />
      </button>
      <p>{currentPage}</p>
      <button onClick={goToNextPage} disabled={totalPages === currentPage}>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default Pagination;
