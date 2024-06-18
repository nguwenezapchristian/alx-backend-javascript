// Print initial message
console.log('Welcome to Holberton School, what is your name?');

// Resume reading from standard input
process.stdin.resume();
// Set encoding to handle input correctly
process.stdin.setEncoding('utf8');

// Listen for input events
process.stdin.on('data', (chunk) => {
  // Trim whitespace and newline characters from input
  const name = chunk.trim();

  // Check if name is not empty
  if (name !== '') {
    console.log(`Your name is: ${name}`);
  }

  // Check if input is from terminal (TTY - TeleTYpewriter)
  if (process.stdin.isTTY) {
    process.exit(); // Exit process if input is from terminal
  } else {
    console.log('This important software is now closing'); // Log closing message for piped input
    process.exit(); // Exit process for piped input
  }
});
