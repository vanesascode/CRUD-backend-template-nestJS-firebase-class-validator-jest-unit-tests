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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLearningDto = void 0;
const class_validator_1 = require("class-validator");
class CreateLearningDto {
}
exports.CreateLearningDto = CreateLearningDto;
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLearningDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.MinLength)(3, { message: 'Jesus! call your cat a longer name!' }),
    __metadata("design:type", String)
], CreateLearningDto.prototype, "cat", void 0);
__decorate([
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateLearningDto.prototype, "dog", void 0);
__decorate([
    (0, class_validator_1.Length)(10, 20),
    __metadata("design:type", String)
], CreateLearningDto.prototype, "owner", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateLearningDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateLearningDto.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(10, {
        each: true,
        message: 'Other animals must be less than 10 characters',
    }),
    __metadata("design:type", Array)
], CreateLearningDto.prototype, "otherAnimals", void 0);
//# sourceMappingURL=create-learning.dto.js.map