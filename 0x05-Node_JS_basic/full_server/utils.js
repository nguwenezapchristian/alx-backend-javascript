// full_server/utils.js
import fs from 'fs';
import readline from 'readline';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  const studentsByField = {};

  const readStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    if (line.trim()) {
      const [firstname, , , field] = line.split(',');

      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }
  });

  rl.on('close', () => {
    resolve(studentsByField);
  });

  // eslint-disable-next-line no-unused-vars
  readStream.on('error', (err) => {
    reject(new Error('Cannot load the database'));
  });
});

export default readDatabase;
