"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningController = void 0;
const common_1 = require("@nestjs/common");
const learning_service_1 = require("../service/learning.service");
const create_learning_dto_1 = require("../dto/create-learning.dto");
const update_learning_dto_1 = require("../dto/update-learning.dto");
let LearningController = class LearningController {
    constructor(learningService) {
        this.learningService = learningService;
    }
    async createData(createLearningDto) {
        return await this.learningService.createData(createLearningDto);
    }
    async updateData(id, updateLearningDto) {
        return await this.learningService.updateData(id, updateLearningDto);
    }
    async patchData(id, partialUpdateLearningDto) {
        return await this.learningService.patchData(id, partialUpdateLearningDto);
    }
    async getData() {
        try {
            return await this.learningService.getData();
        }
        catch (error) {
            throw new common_1.BadRequestException('Data not found');
        }
    }
    async getDataById(id) {
        try {
            return await this.learningService.getDataById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Data with ID ${id} not found`);
        }
    }
    async deleteData(id) {
        try {
            return await this.learningService.deleteData(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Data with ID ${id} not found`);
        }
    }
};
exports.LearningController = LearningController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_learning_dto_1.CreateLearningDto]),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "createData", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_learning_dto_1.UpdateLearningDto]),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "updateData", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "patchData", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "getData", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "getDataById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LearningController.prototype, "deleteData", null);
exports.LearningController = LearningController = __decorate([
    (0, common_1.Controller)('learning'),
    __metadata("design:paramtypes", [learning_service_1.LearningService])
], LearningController);
//# sourceMappingURL=learning.controller.js.map