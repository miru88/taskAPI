import { Repository, DeepPartial, FindOptionsWhere} from "typeorm";


export class BaseDataService<T> {

    constructor(private readonly repository: Repository<T>){}
    
    async findOne(entity: FindOptionsWhere<T>): Promise<T | null> {
      if (!entity || Object.keys(entity).length === 0) {
        throw new Error('Selection conditions are required to find a single row.');
      }
        return this.repository.findOne({ where: entity });
      }
      
    //find all, change this to find all by a specific column
    async findAllBy<K extends keyof T>(column: K, value: T[K]): Promise<T[]> {
        return this.repository.find({
            where: { [column]: value } as FindOptionsWhere<T>,
          });
    }

    //create one
    async create(data: DeepPartial<T>): Promise<T> {
        const newData = this.repository.create(data);

        return this.repository.save(newData);
    }

    //update
    async update(id: number, data:  DeepPartial<T>): Promise<T> {
        await this.repository.update({id} as unknown as FindOptionsWhere<T>, data as any );//figure this out, I dont like that this is "any", data is being difficult
        return this.repository.findOne({
            where: { id } as unknown as FindOptionsWhere<T>,//strange that I have to do this
          });
    }

    //delete
    async delete(id: number): Promise<void> {
        await this.repository.delete({id} as unknown as FindOptionsWhere<T>);
    }

}