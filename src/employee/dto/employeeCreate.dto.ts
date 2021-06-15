import { IsNotEmpty } from 'class-validator';
import { EmployeeStatus, EmployeeTier } from '../employee.enum';

export class EmployeeCreateDto {
  id: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
