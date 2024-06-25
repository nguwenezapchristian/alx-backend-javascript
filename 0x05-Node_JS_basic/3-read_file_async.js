const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf-8');

    // Split the data by new lines to get individual rows
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    // eslint-disable-next-line no-unused-vars
    const header = lines.shift();

    // Initialize an object to hold the counts and lists of students in each field
    const fields = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
        // eslint-disable-next-line no-plusplus
        totalStudents++;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Export the function for testing or importing in other files
module.exports = countStudents;
