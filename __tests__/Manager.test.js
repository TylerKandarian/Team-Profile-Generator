const Manager = require('../lib/Manager');
  
test('creates an Manager object', () => {
    const manager = new Manager("Tyler", 2, "Tyler.kand2@gmail.com", 22);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager("Tyler", 2, "Tyler.kand2@gmail.com");

    expect(manager.getRole()).toEqual("Manager");
});