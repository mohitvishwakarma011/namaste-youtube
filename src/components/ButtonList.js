import React from "react";
import Button from "./Button";

const buttonNames = [
  "All",
  "Mixes",
  "Computer Programming",
  "Gaming",
  "Mantras",
  "Satsang",
  "Live",
  "Sales",
  "News",
  "Motivation",
  "Meditation",
  "Cricket",
  "Movies",
  "Bollywood",
];
const ButtonList = () => {
  return (
    <div className="overflow-x-auto ">
        {buttonNames.map((buttonName) => (
          <Button key={buttonName} name={buttonName} />
        ))}
    </div>
  );
};

export default ButtonList;
