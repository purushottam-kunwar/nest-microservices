export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

export enum EmployeeTier {
  TIER_0 = 'TIER_0',
  TIER_1 = 'TIER_1',
  TIER_2 = 'TIER_2',
  TIER_3 = 'TIER_3',
  TIER_4 = 'TIER_4',
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  SUSOEND = 'SUSOEND',
  RESIGNED = 'RESIGNED',
}
