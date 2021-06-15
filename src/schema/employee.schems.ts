import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EmployeeStatus, EmployeeTier } from 'src/employee/employee.enum';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  id: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  tier: EmployeeTier;
  status: EmployeeStatus;
}
