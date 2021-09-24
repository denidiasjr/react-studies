abstract class Department {
  static fiscalYear = 2021
  protected readonly id: string
  protected name: string
  protected employees: string[] = []

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(): void;

  static createEmployee(name: string) {
    return { name };
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment
  private reports: string[]
  private lastReport: string

  private constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment('d2', ['Report1', 'Report2']);
    }

    return this.instance;
  }
  
  describe() {
    console.log(`Accounting ${this.id}: ${this.name}`);
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

  describe() {
    console.log(`IT Department - ${this.id}: ${this.name}`);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  printAdmins() {
    console.log(this.admins);
  }
}

const accounting = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployee('Fulano');
accounting.addEmployee('Siclano');
accounting.mostRecentReport = 'Report3';
console.log(accounting.mostRecentReport)
accounting.printEmployeeInformation();
accounting.printReports();