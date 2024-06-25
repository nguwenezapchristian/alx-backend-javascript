const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // eslint-disable-next-line no-unused-vars
    const header = lines.shift();
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

    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
