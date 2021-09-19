class Department {
  private readonly id: string
  private name: string
  private employees: string[] = []

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  
  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }
}

const accounting = new Department('123','Accounting');
accounting.describe();
accounting.addEmployee('Fulano');
accounting.addEmployee('Siclano');
accounting.printEmployeeInformation();