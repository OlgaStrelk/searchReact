// import React from "react";

// import "../styles/Pagination.css";

// export default function Pagination({ cardsPerPage, totalCards, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div>
//       <ul className="Pagination">
//         {pageNumbers.map((number) => (
//           <li className="Pagination-item" key={number}>
//             <a href="!#" className="Pagination-link" onClick={()=> paginate(number)}>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../hooks/usePagination";
import "../styles/Pagination.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

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
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="Pagination-container">
      <li
        className={classnames("Pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="Pagination-arrow Arrow-left" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="Pagination-dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames("Pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {}
      <li
        className={classnames("Pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="Pagination-arrow Arrow-right" />
      </li>
    </ul>
  );
};

export default Pagination;
