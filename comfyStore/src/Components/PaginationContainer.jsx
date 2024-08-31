// import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

// const PaginationContainer = () => {
//   const { meta } = useLoaderData();
//   const { pageCount, page } = meta.pagination;

//   const pages = Array.from({ length: pageCount }, (_, index) => {
//     return index + 1;
//   });
//   const { search, pathname } = useLocation();
//   const navigate = useNavigate();
//   const handlePageChange = (pageNumber) => {
//     const searchParams = new URLSearchParams(search);
//     searchParams.set("page", pageNumber);
//     navigate(`${pathname}?${searchParams.toString()}`);
//   };

//   if (pageCount < 2) return null;

//   return (
//     <div className="mt-16 flex justify-end">
//       <div className="join">
//         <button
//           className="btn btn-xs sm:btn-md join-item"
//           onClick={() => {
//             let prevPage = page - 1;
//             if (prevPage < 1) prevPage = pageCount;
//             handlePageChange(prevPage);
//           }}
//         >
//           Prev
//         </button>
//         {pages.map((pageNumber) => {
//           return (
//             <button
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               className={`btn btn-xs sm:btn-md border-none join-item ${
//                 pageNumber === page ? "bg-base-300 border-base-300 " : ""
//               }`}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}
//         <button
//           className="btn btn-xs sm:btn-md join-item"
//           onClick={() => {
//             let nextPage = page + 1;
//             if (nextPage > pageCount) nextPage = 1;
//             handlePageChange(nextPage);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
// export default PaginationContainer;
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  //to build the pagination container
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const naviagte = useNavigate();

  const handlePageChange = (pageNumber, action) => {
    let newPage;
    if (action === "backward") {
      newPage = pageNumber - 1 < 1 ? pageCount : pageNumber - 1;
    } else if (action === "forward") {
      newPage = pageNumber + 1 > pageCount ? 1 : pageNumber + 1;
    } else {
      newPage = pageNumber;
    }
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", newPage);
    //console.log(searchParams.toString());
    naviagte(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      {/* PREV */}
      <div className="join">
        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => handlePageChange(page, "backward")}
        >
          PREV
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-sm sm:btn-md join-item ${
                pageNumber == page ? " bg-base-300 border-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber, 'exact')}
            >
              {pageNumber}
            </button>
          );
        })}
        <div
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => handlePageChange(page, "forward")}
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default PaginationContainer;