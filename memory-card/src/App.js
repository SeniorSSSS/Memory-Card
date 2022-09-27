import React, { useEffect } from "react";
import { TitleSection } from "./Components/TitleSection";
import { Fridge } from "./Components/Fridge";
import { useState } from "react";
import food1 from "./Assets/food1.jpg";
import food2 from "./Assets/food2.jpg";
import food3 from "./Assets/food3.jpeg";
import food4 from "./Assets/food4.jpeg";
import food5 from "./Assets/food5.jpeg";
import food6 from "./Assets/food6.jpeg";
import food7 from "./Assets/food7.jpeg";
import food8 from "./Assets/food8.jpeg";
import food9 from "./Assets/food9.jpeg";
import food10 from "./Assets/food10.jpeg";
import food11 from "./Assets/food11.jpeg";
import food12 from "./Assets/food12.jpeg";

import "./Styles/App.css";

const cnumber = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const initialState = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
  g: false,
  h: false,
  i: false,
  j: false,
  k: false,
  l: false
};


function App() {

const [clickBolean, setClickBolean] = useState(initialState);

const [bestScore, setbestScore] = useState(0);  const [currentScore, setCurrentScore] = useState(0);



  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    shuffle(cnumber);
    console.log(cnumber);
  }, [clickBolean]); 

  return (
    <div className="MainContainer">
      <TitleSection bestScore={bestScore} currentScore={currentScore} clickBolean= {clickBolean}/>
      <div className="FoodGrid12Spaces">
        <Fridge
          initialState={initialState}
          imagelink={food1}
          cardNumber={cnumber[0]}
          imageNumber="1"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food2}
          cardNumber={cnumber[1]}
          imageNumber="2"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge 
          initialState={initialState}
          imagelink={food3}
          cardNumber={cnumber[2]}
          imageNumber="3"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food4}
          cardNumber={cnumber[3]}
          imageNumber="4"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food5}
          cardNumber={cnumber[4]}
          imageNumber="5"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food6}
          cardNumber={cnumber[5]}
          imageNumber="6"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food7}
          cardNumber={cnumber[6]}
          imageNumber="7"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food8}
          cardNumber={cnumber[7]}
          imageNumber="8"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food9}
          cardNumber={cnumber[8]}
          imageNumber="9"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food10}
          cardNumber={cnumber[9]}
          imageNumber="10"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food11}
          cardNumber={cnumber[10]}
          imageNumber="11"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
        <Fridge
          initialState={initialState}
          imagelink={food12}
          cardNumber={cnumber[11]}
          imageNumber="12"
          bestScore={bestScore}
          setbestScore={setbestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          clickBolean={clickBolean}
          setClickBolean={setClickBolean}
        />
      </div>
      <p></p>
      App
    </div>
  );
}

export default App;

