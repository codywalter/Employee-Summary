// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Emplyee = require("../lib/Employee");

class Manager extends Emplyee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
