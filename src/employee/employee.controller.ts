import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeTier } from './employee.model';
import { EmployeeService } from './employee.service';
import { EmployeeSearchDto } from './dto/employeeSearch.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getAllEmployee(@Body() param: EmployeeSearchDto) {
    if (Object.keys(param).length) {
      return this.employeeService.employeeSearch(param);
    } else {
      return this.employeeService.getAllEmployee();
    }
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
