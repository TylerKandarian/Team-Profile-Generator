const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 22;
    const employeeInstance = new Manager("Tyler", 2, "Tyler.kand2@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Tyler", 2, "Tyler.kand2@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Tyler", 2, "Tyler.kand2@gmail.com", 22);
    expect(employeeInstance.getRole()).toBe(returnValue);
});