"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tourguide_entity_1 = require("../tourguide/tourguide.entity");
const civilian_entity_1 = require("../civilian/civilian.entity");
const provider_controller_1 = require("./provider.controller");
const provider_entity_1 = require("./provider.entity");
const provider_service_1 = require("./provider.service");
let providerModule = exports.providerModule = class providerModule {
};
exports.providerModule = providerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([provider_entity_1.providerEntity, civilian_entity_1.civilianEntity, tourguide_entity_1.TourGuideEntity])],
        controllers: [provider_controller_1.providerController],
        providers: [provider_service_1.providerService]
    })
], providerModule);
//# sourceMappingURL=provider.module.js.map