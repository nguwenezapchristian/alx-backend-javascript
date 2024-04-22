// eturn value of the previous function createEmployeesObject
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
