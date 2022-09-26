import React from "react";

export function Fridge(props) {
  const {
    imagelink,
    cardNumber,
    imageNumber,
    clickBolean,
    setClickBolean,
    //componentOneBolean,
    //setComponentOneBolean,
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
        console.log('hi');
        return setClickBolean(previousState => {
          console.log('hi');
        return {...previousState,a: true}});
        // clickBolean.clickBolean.a = true;
        // return;
      case "2":
        clickBolean.clickBolean.b = true;
        return;
      case "3":
        clickBolean.clickBolean.c = true;
        return;
      case "4":
        clickBolean.clickBolean.d = true;
        return;
      case "5":
        clickBolean.clickBolean.e = true;
        return;
      case "6":
        clickBolean.clickBolean.f = true;
        return;
      case "7":
        clickBolean.clickBolean.g = true;
        return;
      case "8":
        clickBolean.clickBolean.h = true;
        return;
      case "9":
        clickBolean.clickBolean.i = true;
        return;
      case "10":
        clickBolean.clickBolean.j = true;
        return;
      case "11":
        clickBolean.clickBolean.k = true;
        return;
      case "12":
        clickBolean.clickBolean.l = true;
        return;
      default:
      console.log('how did this happen');
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
    //define func
    //usefunc
    //for some reason removeing scb fixes it
    //and it can keep track of the value
    //why is scb even needed then smh
    //oo give button clickb to title and see if that component catches it 2.
    changeClickBolean(thecurrentnumber, { clickBolean});
  };
  const whatisclickbolean = () => {
    console.log({clickBolean});
  }

  return (
    <div>
    <button onClick={whatisclickbolean}>yo</button>
    <div
      id={cardNumber}
      className="innergrid"
      onClick={(event) => handleClick(event, { imageNumber })}
    >
      <img src={imagelink} alt="afoodimage"></img>
    </div>
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
