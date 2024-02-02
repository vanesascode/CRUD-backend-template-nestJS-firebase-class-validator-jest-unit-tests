import { CreateLearningDto } from '../dto/create-learning.dto';
export declare class LearningService {
    createData(createLearningDto: CreateLearningDto): Promise<CreateLearningDto>;
    getData(): Promise<CreateLearningDto>;
    getDataById(id: string): Promise<CreateLearningDto>;
    deleteData(id: string): Promise<CreateLearningDto>;
}
