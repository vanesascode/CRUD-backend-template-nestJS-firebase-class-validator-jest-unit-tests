import { LearningService } from '../service/learning.service';
import { CreateLearningDto } from '../dto/create-learning.dto';
import { UpdateLearningDto } from '../dto/update-learning.dto';
export declare class LearningController {
    private readonly learningService;
    constructor(learningService: LearningService);
    createData(createLearningDto: CreateLearningDto): Promise<CreateLearningDto>;
    updateData(id: string, updateLearningDto: UpdateLearningDto): Promise<UpdateLearningDto>;
    patchData(id: string, partialUpdateLearningDto: Partial<UpdateLearningDto>): Promise<UpdateLearningDto>;
    getData(): Promise<CreateLearningDto>;
    getDataById(id: string): Promise<CreateLearningDto>;
    deleteData(id: string): Promise<CreateLearningDto>;
}
