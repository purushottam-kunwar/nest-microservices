import { EmployeeStatus } from '../employee.enum';

export class EmployeeSearchDto {
  status: EmployeeStatus;
  name: string;
}
