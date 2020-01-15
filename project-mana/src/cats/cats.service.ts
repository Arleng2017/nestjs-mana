import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CatType } from './dto/create-cat.dto';
// import { Cat } from './cats.Model';
import { CatInput } from './inputs/cat.input';
@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }
  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
  async findSingleCat(id: string): Promise<Cat> {
    return await this.catModel.findOne({ _id: id });
  }

  async updateCat(id: string, cat: CatInput): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, cat, { new: true });
  }

  async deleteSingleCat(id: string): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(id);
  }
}
