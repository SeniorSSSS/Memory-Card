import React from "react";

export function Fridge(props) {
  const {
    imagelink,
    cardNumber,
    imageNumber,
    clickBolean,
    setClickBolean,
    initialState,
    bestScore,
    setbestScore,
    currentScore,
    setCurrentScore,
  } = props;
 
//aight so each time current score set.
//run assitant function to

  const bestScorechanger = (currentScore,bestScore) => {
    console.log(bestScore);
    console.log('the cs is' + currentScore.currentScore);
      console.log('the bs is' + bestScore);
    if (currentScore.currentScore > bestScore) {
      setbestScore(currentScore.currentScore + 1);
    } else {
      console.log('you have yet to bet your high score');
    }
  }






  const changeClickBolean = (thecurrentnumber, clickBolean,currentScore) => {
    console.log("change click bolean starts here");
    console.log({ clickBolean });
    console.log(thecurrentnumber);

    let thenumberusedforswitchcase = thecurrentnumber;
    switch (thenumberusedforswitchcase) {
      case "1":
        // console.log('doesitwork');
        console.log(clickBolean.clickBolean.a)
        if (clickBolean.clickBolean.a === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, a: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      
      case "2":
        if (clickBolean.clickBolean.b === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, b: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;

      case "3":
        if (clickBolean.clickBolean.c === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, c: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "4":
        if (clickBolean.clickBolean.d === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, d: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "5":
        if (clickBolean.clickBolean.e === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, e: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "6":
        if (clickBolean.clickBolean.f === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, f: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "7":
        if (clickBolean.clickBolean.g === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, g: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "8":
        if (clickBolean.clickBolean.h === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, h: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "9":
        if (clickBolean.clickBolean.i === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, i: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "10":
        if (clickBolean.clickBolean.j === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, j: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "11":
        if (clickBolean.clickBolean.k === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, k: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
      case "12":
        if (clickBolean.clickBolean.l === false) {
          console.log("the change will happen now and show on next console.log");
          console.log(currentScore.currentScore);
          console.log(typeof(currentScore.currentScore));
          setCurrentScore(Number(currentScore.currentScore) + 1);
          bestScorechanger(currentScore,bestScore);
          return setClickBolean((previousState) => {return { ...previousState, l: true };
          });
        } else {
          setCurrentScore(0);
          setClickBolean(initialState);
        }
        break;
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
    changeClickBolean(thecurrentnumber, { clickBolean }, {currentScore});
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
