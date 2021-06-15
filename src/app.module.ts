import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.proprities';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule {}
