import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const SimpleContainer: React.FC<React.PropsWithChildren<Record<never, any>>> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "calc(100vh - 150px)", overflow: "hidden" }}>
        {children}
      </Container>
    </>
  );
};

export default SimpleContainer;
