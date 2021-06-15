import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Employee, EmployeeStatus, EmployeeTier } from './employee.model';
import { EmployeeSearchDto } from './dto/employeeSearch.dto';
import { EmployeeUpdateDto } from './dto/employeeUpdate.dto';

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
      status: EmployeeStatus.ACTIVE,
    };
    this.employees.push(employee);
    return employee;
  }

  employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    const { status, name } = employeeSearchDto;
    let employees = this.getAllEmployee();
    if (status) {
      return (employees = employees.filter((employee) => employee.status));
    }
    if (name) {
      return (employees = employees.filter(
        (employee) =>
          employee.firstName.includes(name) || employee.lastName.includes(name),
      ));
    }
    return employees;
  }

  getEmployeeById(id: string): Employee {
    const employees = this.getAllEmployee();
    return employees.find((employee) => employee.id === id);
  }

  employeeUpdate(employeeUpdateDto: EmployeeUpdateDto): Employee {
    const { id, name } = employeeUpdateDto;
    const employee = this.getEmployeeById(id);
    employee.firstName = name;
    return employee;
  }

  deleteEmployee(id: string): boolean {
    const employees = this.getAllEmployee();
    this.employees.filter((employeee) => employeee.id != id);
    return employees.length != this.employees.length;
  }
}
