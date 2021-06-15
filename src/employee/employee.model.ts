export interface Employee {
  firstName: string;
  lastName: string;
  tier: EmployeeTier;
}

export enum EmployeeTier {
  TIER_0 = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
  TIER_4 = 4,
}
