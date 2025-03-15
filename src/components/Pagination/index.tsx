import {
  PageButton,
  PaginationContainer,
  NavButton,
  CurrentPage,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const numPagesToShow = 5;
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(numPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + numPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          active={currentPage === i}
        >
          {i}
        </PageButton>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <NavButton onClick={handlePrevClick} disabled={currentPage === 1}>
        <FaChevronLeft />
      </NavButton>
      <CurrentPage>{currentPage}</CurrentPage>
      {renderPageNumbers()}
      <NavButton
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </NavButton>
    </PaginationContainer>
  );
}
