"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningModule = void 0;
const common_1 = require("@nestjs/common");
const learning_service_1 = require("./service/learning.service");
const learning_controller_1 = require("./controller/learning.controller");
let LearningModule = class LearningModule {
};
exports.LearningModule = LearningModule;
exports.LearningModule = LearningModule = __decorate([
    (0, common_1.Module)({
        providers: [learning_service_1.LearningService],
        controllers: [learning_controller_1.LearningController],
    })
], LearningModule);
//# sourceMappingURL=learning.module.js.map