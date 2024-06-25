const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const databasePath = process.argv[2]; // Get the database path from the command line arguments

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentsInfo = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
