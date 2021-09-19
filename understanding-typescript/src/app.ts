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

class AccountingDepartment extends Department {
  private reports: string[]

  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

class ITDepartment extends Department {
  private admins: string[]

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  printAdmins() {
    console.log(this.admins);
  }
}

const accounting = new Department('123','Accounting');
accounting.describe();
accounting.addEmployee('Fulano');
accounting.addEmployee('Siclano');
accounting.printEmployeeInformation();