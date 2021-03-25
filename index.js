// Code your solution in this file!
const headquarters = 42
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - headquarters)
}
// The below tests out my above code
// const result = distanceFromHqInBlocks("3")
// console.log(result);

const blockInFeet = 264
function distanceFromHqInFeet(pickupLocation) {
    return (Math.abs(pickupLocation - headquarters)* blockInFeet)
}
// The below tests out my above code
// const result = distanceFromHqInBlocks("3")
// const resultTwo = distanceFromHqInFeet ("44")
// console.log(result);
// console.log(resultTwo);


function distanceTravelledInFeet(startingBlock,endingBlock) {
    return Math.abs(startingBlock-endingBlock) * blockInFeet
}
// The below tests out my above code
// const resultThree = distanceTravelledInFeet ("44","42")
// console.log(resultThree);

let freeFeet = 400
let centsPerFoot = .02
function calculatesFarePrice(startingBlock,endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock,endingBlock);
  let result;
  if (distance <= 400) {
    result = 0;
  } else if (distance > 400 && distance <= 2000) {
    result = (distance-freeFeet) * centsPerFoot;
  } else if (distance > 2000 && distance <2500) {
    result = 25;
  } else if (distance >= 2500) {
    result = "cannot travel that far"
}
console.log(distance); 
  return result;
    //return distance(startingBlock,endingBlock)*centsPerFoot
}
//feet <= 400, "free"
//feet > 400 && <=2000, "(centsPerFoot* Math.abs(startingBlock-endingBlock))-freeFeet"
//feet >2000 && <=2500, "Flat Fare"
//feet >2500, "Cannot travel that far"
const resultFour = calculatesFarePrice ("42","43")