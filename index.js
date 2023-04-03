// Write your solution in this file!
const employee = {
    name: "Melaine Kanana Mbae",
    streetAddress: "339 embu 60100",
  };

  function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
      };
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
      }

    function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = { ...employee };
        delete newEmployee[key];
        return newEmployee;
      }

    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
      }