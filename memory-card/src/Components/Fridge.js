import React from "react";

export function Fridge(props) {
  const {
    imagelink,
    cardNumber,
    imageNumber,
    clickBolean,
    setClickBolean,
    // bestScore,
    // setbestScore,
    // currentScore,
    // setCurrentScore,
  } = props;

  const changeClickBolean = (thecurrentnumber, clickBolean) => {
    console.log("change click bolean starts here");
    console.log({ clickBolean });
    console.log(thecurrentnumber);

    let thenumberusedforswitchcase = thecurrentnumber;
    switch (thenumberusedforswitchcase) {
      case "1":
        //it doesnt tell it where to go
        //so maybe return updated array
        //or idk
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, a: true };
        });
      case "2":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, b: true };
        });
      case "3":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, c: true };
        });
      case "4":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, d: true };
        });
      case "5":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, e: true };
        });
      case "6":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, f: true };
        });
      case "7":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, g: true };
        });
      case "8":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, h: true };
        });
      case "9":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, i: true };
        });
      case "10":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, j: true };
        });
      case "11":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, k: true };
        });
      case "12":
        console.log("the change will happen now");
        return setClickBolean((previousState) => {
          return { ...previousState, l: true };
        });
      default:
        console.log("If you see this how did you do this even");
    }
    console.log("hi");
  };

  const handleClick = (event, thenumber) => {
    //the prop imageNUmber is an object so you need that last part
    console.log({ clickBolean });
    console.log("yo handleclick starts here");
    let thecurrentnumber = thenumber.imageNumber;
    console.log(
      "shouldbetheclickedimagenumber which was assigned to thecurrentnumber variable"
    );
    console.log(thecurrentnumber);
    changeClickBolean(thecurrentnumber, { clickBolean });
  };
  // const whatisclickbolean = () => {
  //   console.log({ clickBolean });
  // };

  return (
    
      <div
        id={cardNumber}
        className="innergrid"
        onClick={(event) => handleClick(event, { imageNumber })}
      >
        <img src={imagelink} alt="afoodimage"></img>

        {/* <button onClick={whatisclickbolean}>yo</button> */}
      </div>
    
  );
}

//now each time the function runs it takes the image n and uses it with the setclickbolean func to switch it. Then the reshuffle happens.

//it moves whole component per reshuffle so div stays
//on render take the cardnumber and you know hav the food number

//how does the computer remember which was touched
//well when image touched

//each image has a number which can correspond to its actual t/f

//

// console.log(event.currentTarget.className);
// console.log(event.currentTarget.id);
// console.log("cn is" + cardNumber);
// setClickBolean((currentTarget) => {
//   return console.log(currentTarget = !currentTarget);
// });

// //  const {
//   imagelink,
//   cardNumber,
//   //imageNumber,
//   componentOneBolean,
//   setComponentOneBolean,
//   //clickBolean,
//   //setClickBolean,
//   // bestScore,
//   // setbestScore,
//   // currentScore,
//   // setCurrentScore,
// } = props;
// const handleClick = (event, thevalue, setComponentOneBolean) => {
//   console.log(thevalue);
//   setComponentOneBolean(thevalue => !thevalue);

// };

// return (
//   <div id={cardNumber} className="innergrid"  onClick={event => handleClick(event, { componentOneBolean},{setComponentOneBolean} )}>
//     <img src={imagelink} alt="afoodimage"></img>
//   </div>
// );
// }
