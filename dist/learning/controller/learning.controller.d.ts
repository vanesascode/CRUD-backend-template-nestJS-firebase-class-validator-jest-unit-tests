import { LearningService } from '../service/learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';
export declare class LearningController {
    private readonly learningService;
    constructor(learningService: LearningService);
    createData(data: any): Promise<CreateLearningDto>;
    getData(): Promise<CreateLearningDto>;
    getDataById(id: string): Promise<CreateLearningDto>;
    deleteData(id: string): Promise<CreateLearningDto>;
}
