import * as React from "react";
import styled from "styled-components";
import { Link, MemoryRouter, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationLink({ setPag, pagNumber }) {
  const handleClose = (pag) => {
    setPag(pag);
  };

  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const pages =
            parseFloat(pagNumber / 10) - parseInt(pagNumber / 10) > 0
              ? parseInt(pagNumber / 10) + 1
              : parseFloat(pagNumber / 10) - parseInt(pagNumber / 10) === 0
              ? parseInt(pagNumber / 10)
              : 0;
          return (
            <PaginationCard
              onChange={(_, page) => handleClose(page)}
              count={pages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}

export const PaginationCard = styled(Pagination)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
