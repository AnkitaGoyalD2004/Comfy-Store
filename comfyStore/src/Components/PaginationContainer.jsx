import React from "react";
import { useNavigate, useLocation, useLoaderData } from "react-router-dom";
export default function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;

  return <div>PaginationContainer</div>;
}
