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
exports.providerEntity = void 0;
const tourguide_entity_1 = require("../tourguide/tourguide.entity");
const civilian_entity_1 = require("../civilian/civilian.entity");
const typeorm_1 = require("typeorm");
let providerEntity = exports.providerEntity = class providerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], providerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], providerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, unique: true }),
    __metadata("design:type", String)
], providerEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], providerEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], providerEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], providerEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], providerEntity.prototype, "photoFileName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => civilian_entity_1.civilianEntity, civilian => civilian.provider, { cascade: ["remove"] }),
    __metadata("design:type", Array)
], providerEntity.prototype, "civilians", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tourguide_entity_1.TourGuideEntity, tourguide => tourguide.providers),
    (0, typeorm_1.JoinTable)({
        name: 'provider_TourGuide',
        joinColumn: {
            name: 'providerID',
            referencedColumnName: 'id'
        },
    }),
    __metadata("design:type", Array)
], providerEntity.prototype, "tourguides", void 0);
exports.providerEntity = providerEntity = __decorate([
    (0, typeorm_1.Entity)('provider')
], providerEntity);
//# sourceMappingURL=provider.entity.js.map