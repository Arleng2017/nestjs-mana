import { Module } from '@nestjs/common';
import { CatResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.Schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatResolver, CatsService],
})
export class CatsModule {}
