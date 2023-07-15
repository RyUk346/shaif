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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravellerEntity = void 0;
const manager_entity_1 = require("src/manager/manager.entity");
const typeorm_1 = require("typeorm");
let TravellerEntity = exports.TravellerEntity = class TravellerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TravellerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TravellerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, unique: true }),
    __metadata("design:type", String)
], TravellerEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TravellerEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TravellerEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TravellerEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TravellerEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TravellerEntity.prototype, "profession", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], TravellerEntity.prototype, "managerID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manager_entity_1.ManagerEntity, manager => manager.travellers, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'managerID' }),
    __metadata("design:type", typeof (_a = typeof manager_entity_1.ManagerEntity !== "undefined" && manager_entity_1.ManagerEntity) === "function" ? _a : Object)
], TravellerEntity.prototype, "manager", void 0);
exports.TravellerEntity = TravellerEntity = __decorate([
    (0, typeorm_1.Entity)('Traveller')
], TravellerEntity);
//# sourceMappingURL=traveller.entity.js.map