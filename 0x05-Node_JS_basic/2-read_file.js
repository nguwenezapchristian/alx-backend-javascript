const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8').trim();

    // Split the data into lines and process each line
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize counters and arrays for names
    let totalStudents = 0;
    const csStudents = [];
    const sweStudents = [];

    // Process each line (assuming each line is formatted correctly)
    lines.forEach((line) => {
      const [firstname,,, field] = line.split(',');
      if (field === 'CS') {
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweStudents.push(firstname);
      }
      // eslint-disable-next-line no-plusplus
      totalStudents++;
    });

    // Output the results
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
