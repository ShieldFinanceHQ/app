import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const SimpleContainer: React.FC<{}> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "calc(100vh - 200px)", overflow: "hidden" }}>
        {children}
      </Container>
    </>
  );
};

export default SimpleContainer;
