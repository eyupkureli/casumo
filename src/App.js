import React from "react";
import Navbar from "./components/Navbar";
import YourCards from "./components/YourCards";
import CardContextProvider from "./context/CardContext";

function App() {
  return (
    <>
      <Navbar />
      <CardContextProvider>
        <YourCards />
      </CardContextProvider>
    </>
  );
}

export default App;
