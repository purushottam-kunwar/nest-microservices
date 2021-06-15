import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from '../employee/employee.model';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException(`${value.tier} is not valid tier`);
    }
    return value;
  }
}
