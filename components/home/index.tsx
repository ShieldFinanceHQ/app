import React from "react";
import WelcomeNote from "../uiComponents/welcomeNote";

const Home = ({ theme }: { theme: String }) => {
  return (
    <div>
      <WelcomeNote theme={theme} subtitle="Welcome to" title="Shield Finance!" description="xyz..." />
    </div>
  );
};

export default Home;
