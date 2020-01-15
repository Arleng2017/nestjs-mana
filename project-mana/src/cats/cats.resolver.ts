import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';
import { Post } from '@nestjs/common';
import { Cat } from './cats.Model';

@Resolver()
export class CatResolver {
  constructor(private readonly catsService: CatsService) {}
  @Query(() => String)
  async hello() {
    return 'hello';
  }
  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }
  @Query(() => CatType)
  async getCat(@Args('id') id: string) {
    return this.catsService.findSingleCat(id);
  }
  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }

  @Mutation(() => CatType)
  async updateCat(@Args('id') id: string, @Args('input') input: CatInput) {
    return this.catsService.updateCat(id, input);
  }

  @Query(() => CatType)
  async deleteCat(@Args('id') id: string) {
    return this.catsService.deleteSingleCat(id);
  }

  // @Mutation(() => ItemType)
  // async deleteItem(@Args('id') id: string): Promise<ItemInput> {
  //   return this.itemsService.delete(id);
  // }
}
