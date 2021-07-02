import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const SimpleContainer: React.FC<{}> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "100%" }}>
        {children}
      </Container>
    </>
  );
};

export default SimpleContainer;
