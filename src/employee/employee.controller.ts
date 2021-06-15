import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeSearchDto } from './dto/employeeSearch.dto';
import { EmployeeUpdateDto } from './dto/employeeUpdate.dto';
import { EmployeeCreateDto } from './dto/employeeCreate.dto';

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
  createEmployee(@Body() employeeCreateDto: EmployeeCreateDto) {
    return this.employeeService.createEmployee(employeeCreateDto);
  }

  @Get('/:id')
  getEmployeeById(@Param() id: string) {
    return this.employeeService.getEmployeeById(id);
  }

  @Put('/:id/name')
  updateEmployee(
    @Param('id') id: string,
    @Body() employeeUpdateDto: EmployeeUpdateDto,
  ) {
    employeeUpdateDto.id = id;
    return this.employeeService.employeeUpdate(employeeUpdateDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteEmployee(@Param('id') id: string) {
    if (!this.employeeService.deleteEmployee(id)) {
      throw new NotFoundException('Data not found');
    }
  }
}
