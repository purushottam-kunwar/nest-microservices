import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Employee, EmployeeTier } from './employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];

  getAllEmployee() {
    return this.employees;
  }

  createEmployee(firstName: string, lastName: string, tier: EmployeeTier) {
    const employee = {
      id: uuid(),
      firstName,
      lastName,
      tier,
    };
    this.employees.push(employee);
    return employee;
  }
}
