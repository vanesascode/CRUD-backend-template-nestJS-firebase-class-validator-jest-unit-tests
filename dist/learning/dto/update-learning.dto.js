"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLearningDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_learning_dto_1 = require("./create-learning.dto");
class UpdateLearningDto extends (0, mapped_types_1.PartialType)(create_learning_dto_1.CreateLearningDto) {
}
exports.UpdateLearningDto = UpdateLearningDto;
//# sourceMappingURL=update-learning.dto.js.map