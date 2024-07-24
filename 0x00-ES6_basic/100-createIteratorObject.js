// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department in report.allEmployees) {
    if (Object.hasOwnProperty.call(report.allEmployees, department)) {
      allEmployees.push(...report.allEmployees[department]);
    }
  }
  return allEmployees[Symbol.iterator]();
}
