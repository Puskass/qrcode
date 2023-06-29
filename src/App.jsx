import React from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";

const App = () => {
  const links = [
    "https://example.com",
    "https://openai.com",
    "https://reactjs.org",
    "https://github.com",
  ];

  return (
    <div>
      {links.map((link, index) => (
        <QRCodeGenerator key={index} link={link} />
      ))}
    </div>
  );
};

export default App;
