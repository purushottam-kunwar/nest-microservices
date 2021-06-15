import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeTier } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getAllEmployee() {
    return this.employeeService.getAllEmployee();
  }

  @Post()
  createEmployee(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('tier') tier: EmployeeTier,
  ) {
    return this.employeeService.createEmployee(firstName, lastName, tier);
  }
}
