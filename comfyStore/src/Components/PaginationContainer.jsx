import React from "react";
import { useNavigate, useLocation, useLoaderData } from "react-router-dom";

export default function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  let pageNumbers = [1];
  if (page !== 1 && page !== pageCount) {
    pageNumbers.push(page);
  }
  pageNumbers.push(pageCount);

  return (
    <div className="join">
      <button
        className="btn btn:xs sm:btn:md join-item"
        onClick={() => {
          let prevPage = page - 1;
          if (prevPage < 1) prevPage = pageCount;
          handlePageChange(prevPage);
        }}
        disabled={page === 1}
      >
        Prev
      </button>
      {pageNumbers.map((pageNumber, index) => (
        <React.Fragment key={pageNumber}>
          {index > 0 && (
            <button className="btn sm:btn-md border-none join-item" disabled>
              ...
            </button>
          )}
          <button
            className={`btn sm:btn-md border-none join-item ${
              pageNumber === page ? "bg-base-300 border-base-900" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </React.Fragment>
      ))}
      <button
        className="btn btn:xs sm:btn:md join-item"
        onClick={() => {
          let nextPage = page + 1;
          if (nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage);
        }}
        disabled={page === pageCount}
      >
        Next
      </button>
    </div>
  );
}
