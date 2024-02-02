import { CreateLearningDto } from '../dto/create-learning.dto';
import { UpdateLearningDto } from '../dto/update-learning.dto';
export declare class LearningService {
    createData(createLearningDto: CreateLearningDto): Promise<CreateLearningDto>;
    updateData(id: string, updateLearningDto: UpdateLearningDto): Promise<CreateLearningDto>;
    patchData(id: string, partialUpdateLearningDto: Partial<UpdateLearningDto>): Promise<CreateLearningDto>;
    getData(): Promise<CreateLearningDto>;
    getDataById(id: string): Promise<CreateLearningDto>;
    deleteData(id: string): Promise<CreateLearningDto>;
}
