// a function named createEmployeesObject that will receive two arguments
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
