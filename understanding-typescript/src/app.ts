class Department {
  private readonly id: string
  private name: string
  protected employees: string[] = []

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
  private lastReport: string

  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error('Not valid report');
    }

    this.addReport(report);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
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

const accounting = new AccountingDepartment('123', ['Report1', 'Report2']);
accounting.describe();
accounting.addEmployee('Fulano');
accounting.addEmployee('Siclano');
accounting.mostRecentReport = 'Report3';
console.log(accounting.mostRecentReport)
accounting.printEmployeeInformation();
accounting.printReports();