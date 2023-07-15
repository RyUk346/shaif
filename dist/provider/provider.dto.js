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
exports.providerInfoDTO = exports.providerUpdateDTO = exports.DeleteQry = exports.providerLoginDTO = exports.providerRegDTO = void 0;
const class_validator_1 = require("class-validator");
class providerRegDTO {
}
exports.providerRegDTO = providerRegDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Name" }),
    (0, class_validator_1.Matches)(/^[a-z A-Z]+$/, { message: "Use Valid Name Format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Name Must be Filled!" }),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], providerRegDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Name" }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9@._$]+$/, { message: "Use Valid Username Format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Username Must be Filled!" }),
    __metadata("design:type", String)
], providerRegDTO.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid E-mail!" }),
    (0, class_validator_1.IsNotEmpty)({ message: "E-mail Must be Filled!" }),
    __metadata("design:type", String)
], providerRegDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Invalid Contact!" }),
    __metadata("design:type", Number)
], providerRegDTO.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Password!" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Password Must be Filled!" }),
    __metadata("design:type", String)
], providerRegDTO.prototype, "password", void 0);
class providerLoginDTO {
}
exports.providerLoginDTO = providerLoginDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Name" }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9@._$]+$/, { message: "Use Valid Username Format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Username Must be Filled!" }),
    __metadata("design:type", String)
], providerLoginDTO.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Password!" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Password Must be Filled!" }),
    __metadata("design:type", String)
], providerLoginDTO.prototype, "password", void 0);
class DeleteQry {
}
exports.DeleteQry = DeleteQry;
class providerUpdateDTO {
}
exports.providerUpdateDTO = providerUpdateDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Name" }),
    (0, class_validator_1.Matches)(/^[a-z A-Z]+$/, { message: "Use Valid Name Format" }),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], providerUpdateDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid E-mail!" }),
    __metadata("design:type", String)
], providerUpdateDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Invalid Contact!" }),
    __metadata("design:type", Number)
], providerUpdateDTO.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Password!" }),
    __metadata("design:type", String)
], providerUpdateDTO.prototype, "password", void 0);
class providerInfoDTO {
}
exports.providerInfoDTO = providerInfoDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid Name" }),
    (0, class_validator_1.Matches)(/^[a-z A-Z]+$/, { message: "Use Valid Name Format" }),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], providerInfoDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid E-mail!" }),
    __metadata("design:type", String)
], providerInfoDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Invalid Contact!" }),
    __metadata("design:type", Number)
], providerInfoDTO.prototype, "contact", void 0);
//# sourceMappingURL=provider.dto.js.map