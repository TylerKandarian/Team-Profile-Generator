const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "TylerKandarian";
    const employeeInstance = new Engineer("Tyler", 2, "Tyler.kand2@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "TylerKandarian";
    const employeeInstance = new Engineer("Tyler", 2, "Tyler.kand2@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Tyler", 2, "Tyler.kand2@gmail.com", "TylerKandarian");
    expect(employeeInstance.getRole()).toBe(returnValue);
});