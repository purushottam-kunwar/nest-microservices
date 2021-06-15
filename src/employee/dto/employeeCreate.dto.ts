import { EmployeeStatus, EmployeeTier } from '../employee.model';

export interface EmployeeCreateDto {
  id: string;
  firstName: string;
  lastName: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
