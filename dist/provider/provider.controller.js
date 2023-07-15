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
exports.providerController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const tourguide_dto_1 = require("../tourguide/tourguide.dto");
const civilian_dto_1 = require("../civilian/civilian.dto");
const provider_dto_1 = require("./provider.dto");
const provider_service_1 = require("./provider.service");
const session_guard_1 = require("./session.guard");
let providerController = exports.providerController = class providerController {
    constructor(providerService) {
        this.providerService = providerService;
    }
    regprovider(providerRegInfo) {
        console.log(providerRegInfo);
        return this.providerService.regprovider(providerRegInfo);
    }
    async loginprovider(providerLoginInfo, session) {
        console.log(providerLoginInfo);
        if (await this.providerService.loginprovider(providerLoginInfo)) {
            session.username = providerLoginInfo.username;
            return "provider Login Successful!";
        }
        else {
            return "provider Login Failed!";
        }
    }
    uploadprovider(photoObj, session) {
        console.log(photoObj.filename);
        const fileName = photoObj.filename;
        return this.providerService.uploadprovider(fileName, session.username);
    }
    regcivilian(civilianRegInfo, session) {
        console.log(civilianRegInfo);
        return this.providerService.regcivilian(civilianRegInfo, session.username);
    }
    getcivilianByproviderId(session) {
        return this.providerService.getcivilianByproviderId(session.username);
    }
    updateproviderInfo(providerUpdateInfo, session) {
        console.log(providerUpdateInfo);
        return this.providerService.updateproviderInfo(providerUpdateInfo, session.username);
    }
    removeprovider(session) {
        return this.providerService.removeprovider(session.username);
    }
    removecivilian(civilianId, session) {
        return this.providerService.removecivilian(civilianId, session.username);
    }
    regTourGuide(tourguideRegInfo) {
        console.log(tourguideRegInfo);
        return this.providerService.regTourGuide(tourguideRegInfo);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_dto_1.providerRegDTO]),
    __metadata("design:returntype", Object)
], providerController.prototype, "regprovider", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_dto_1.providerLoginDTO, Object]),
    __metadata("design:returntype", Promise)
], providerController.prototype, "loginprovider", null);
__decorate([
    (0, common_1.Put)('upload'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        fileFilter: (req, file, cb) => {
            if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
                cb(null, true);
            }
            else {
                cb(new multer_1.MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
        },
        limits: { fileSize: 300000 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            },
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], providerController.prototype, "uploadprovider", null);
__decorate([
    (0, common_1.Post)('register/civilian'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [civilian_dto_1.civilianRegDTO, Object]),
    __metadata("design:returntype", void 0)
], providerController.prototype, "regcivilian", null);
__decorate([
    (0, common_1.Get)('search/civilian'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], providerController.prototype, "getcivilianByproviderId", null);
__decorate([
    (0, common_1.Put)('updateinfo'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_dto_1.providerUpdateDTO, Object]),
    __metadata("design:returntype", Object)
], providerController.prototype, "updateproviderInfo", null);
__decorate([
    (0, common_1.Delete)('remove'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], providerController.prototype, "removeprovider", null);
__decorate([
    (0, common_1.Delete)('remove/civilian/:civilianId'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('civilianId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], providerController.prototype, "removecivilian", null);
__decorate([
    (0, common_1.Post)('register/tourguide'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tourguide_dto_1.TourGuideRegDTO]),
    __metadata("design:returntype", Object)
], providerController.prototype, "regTourGuide", null);
exports.providerController = providerController = __decorate([
    (0, common_1.Controller)('provider'),
    __metadata("design:paramtypes", [provider_service_1.providerService])
], providerController);
//# sourceMappingURL=provider.controller.js.map