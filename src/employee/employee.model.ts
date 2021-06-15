export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

export enum EmployeeTier {
  TIER_ONE = 'TIER_ONE',
  IER_TWO = 'TIER_TWO',
  TIER_THREE = 'TIER_THREE',
  TIER_FOUR = 'TIER_FOUR',
  TIER_FIVE = 'TIER_FIVE',
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  SUSPEND = 'SUSPEND',
  RESIGNED = 'RESIGNED',
}
