import React from "react";
import { usePagination, DOTS } from "./paginationCalc";

const PaginationComp = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  selectedPage,
  totalPage,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1, "next");
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1, "prev");
  };

  //   let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={"pagination-container"}>
      <button
        className={`button_rounded ${
          selectedPage === 1 ? "button-disabled" : ""
        }`}
        onClick={(_) => onPrevious()}
        disabled={selectedPage === 1 ? true : false}
      >
        Prev
      </button>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={`dots-${idx}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={"pagination-item cursor-pointer"}
            onClick={() => onPageChange(pageNumber)}
            style={{
              border: selectedPage !== pageNumber ? "3px solid #F1F3F4" : "",
              padding: "10px",
              background: selectedPage === pageNumber ? "#eee" : "",
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      <button
        className={`button_rounded ${
          selectedPage === totalPage ? "button-disabled" : ""
        }`}
        onClick={(_) => onNext()}
        disabled={selectedPage === totalPage ? true : false}
      >
        Next
      </button>
    </ul>
  );
};

export default PaginationComp;
