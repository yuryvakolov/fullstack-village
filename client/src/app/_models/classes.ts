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

export class Expense {
  id?: number;
  name?: string;
  plan?: number;
  fact?: number;

  constructor(value: any) {
    this.id = value.id;
    this.name = value.name;
    this.plan = value.plan;
    this.fact = value.fact;
  }
}
