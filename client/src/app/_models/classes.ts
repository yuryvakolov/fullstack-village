export class Finance {
  potentialFinancialFund: number;
  actualFunds: number;
  approvedBudget: number;
  actualCosts: number;
  actualReceipts: number;
  expectedReceipts: number;
  financialBalance: number;
  pastPeriodsArrears: number;
  projects?: any;

  constructor(value: any) {
    this.potentialFinancialFund = value.potentialFinancialFund
    this.actualFunds = value.actualFunds
    this.approvedBudget = value.approvedBudget;
    this.actualCosts = value.actualCosts;
    this.actualReceipts = value.actualReceipts;
    this.expectedReceipts = value.expectedReceipts;
    this.financialBalance = value.financialBalance;
    this.pastPeriodsArrears = value.pastPeriodsArrears;
    this.projects = value.projects;
  }
}

export class Project {
  id?: number;
  name?: string;
  expenses?: any;
  summaryPlan?: number;
  summaryFact?: number;

  constructor(value: any) {
    this.id = value.id;
    this.name = value.name;
    this.expenses = value.expenses;
    this.summaryPlan = value.summaryPlan;
    this.summaryFact = value.summaryFact;
  }
}

export class ExpensesCategory {
  id?: number;
  name: string;
  year: number;
  summary: number;

  constructor(value: any) {
    this.id = -1;
    this.name = value.name;
    this.year = new Date().getFullYear();
    this.summary = 0;
  }
}
