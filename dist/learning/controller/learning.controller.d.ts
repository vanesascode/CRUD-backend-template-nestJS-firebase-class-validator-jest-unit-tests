import { LearningService } from '../service/learning.service';
export declare class LearningController {
    private readonly learningService;
    constructor(learningService: LearningService);
    createData(data: any): Promise<any>;
    getData(): Promise<any>;
    deleteData(id: string): Promise<any>;
}
