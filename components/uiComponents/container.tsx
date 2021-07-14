import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const SimpleContainer: React.FC<React.PropsWithChildren<Record<never, any>>> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs" style={{ height: "calc(100vh)", overflow: "hidden", padding: 0 }}>
        {children}
      </Container>
    </>
  );
};

export default SimpleContainer;
