import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Employee } from '../schema/employee.schems';
import { EmployeeSearchDto } from './dto/employeeSearch.dto';
import { EmployeeUpdateDto } from './dto/employeeUpdate.dto';
import { EmployeeCreateDto } from './dto/employeeCreate.dto';
import { EmployeeStatus } from './employee.enum';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];

  getAllEmployee() {
    return this.employees;
  }

  createEmployee(employeeCreateDto: EmployeeCreateDto) {
    const { firstName, lastName, tier } = employeeCreateDto;
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
    const employee = employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`${id} is not exist`);
    }
    return employee;
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
