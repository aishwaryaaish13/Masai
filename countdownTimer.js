const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown seconds: ", (seconds) => {
  let timeLeft = Number(seconds);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid number.");
    rl.close();
    return;
  }

  console.log(`Countdown starts from ${timeLeft} seconds...`);
  console.log(`Press 's' to stop the countdown.`);


  const intervalId = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  function checkKeyPress() {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          clearInterval(intervalId);
          console.log("Countdown stopped by user!");
          rl.close();
          return;
        }
      });

    
      if (rl.closed === false) checkKeyPress();
    }, 200);
  }

  checkKeyPress(); 
});
