/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(inputTime){
  let splitTime = inputTime.split(':')
  let hour = parseInt(splitTime[0])
  
  if(hour < 12 ) {
    return "Good Morning"
  } else if (hour < 18) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message
}