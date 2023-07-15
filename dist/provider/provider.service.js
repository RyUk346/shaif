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
exports.providerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const civilian_entity_1 = require("../civilian/civilian.entity");
const typeorm_2 = require("typeorm");
const provider_entity_1 = require("./provider.entity");
const bcrypt = require("bcrypt");
const tourguide_entity_1 = require("../tourguide/tourguide.entity");
let providerService = exports.providerService = class providerService {
    constructor(providerRepo, civilianRepo, tourguideRepo) {
        this.providerRepo = providerRepo;
        this.civilianRepo = civilianRepo;
        this.tourguideRepo = tourguideRepo;
    }
    async regprovider(providerRegInfo) {
        const salt = await bcrypt.genSalt();
        providerRegInfo.password = await bcrypt.hash(providerRegInfo.password, salt);
        return this.providerRepo.save(providerRegInfo);
    }
    async loginprovider(providerLoginInfo) {
        const provider = await this.providerRepo.findOneBy({ username: providerLoginInfo.username });
        const isMatch = await bcrypt.compare(providerLoginInfo.password, provider.password);
        console.log(isMatch);
        return isMatch;
    }
    async uploadprovider(fileName, username) {
        const provider = await this.providerRepo.findOneBy({ username: username });
        console.log(username);
        if (provider) {
            provider.photoFileName = fileName;
            await this.providerRepo.save(provider);
            return "provider Photo Uploaded!";
        }
        return "provider Photo Couldn't be Uploaded!";
    }
    async regcivilian(civilianRegInfo, providerUsername) {
        const provider = await this.providerRepo.findOneBy({ username: providerUsername });
        civilianRegInfo.providerID = provider.id;
        return this.civilianRepo.save(civilianRegInfo);
    }
    async getcivilianByproviderId(providerUsername) {
        console.log(providerUsername);
        const provider = await this.providerRepo.findOneBy({ username: providerUsername });
        const providerId = provider.id;
        return this.providerRepo.find({
            where: { id: providerId },
            relations: { civilians: true }
        });
    }
    async updateproviderInfo(providerUpdateInfo, providerUsername) {
        const provider = await this.providerRepo.findOneBy({ username: providerUsername });
        providerUpdateInfo.id = provider.id;
        const salt = await bcrypt.genSalt();
        providerUpdateInfo.password = await bcrypt.hash(providerUpdateInfo.password, salt);
        await this.providerRepo.update({ id: provider.id }, providerUpdateInfo);
        console.log("update!");
        return this.providerRepo.findOneBy({ id: provider.id });
    }
    async removeprovider(providerUsername) {
        const provider = await this.providerRepo.findOneBy({ username: providerUsername });
        await this.providerRepo.delete(provider.id);
    }
    async removecivilian(civilianId, providerUsername) {
        const civilian = await this.civilianRepo.findOneBy({ id: civilianId });
        const provider = await this.providerRepo.findOneBy({ username: providerUsername });
        const providerId = provider.id;
        if (civilian.providerID == providerId) {
            await this.civilianRepo.delete(civilianId);
            return "civilian Deleted!";
        }
        else {
            return "Couldn't Delete!";
        }
    }
    async regTourGuide(tourguideRegInfo) {
        const salt = await bcrypt.genSalt();
        tourguideRegInfo.password = await bcrypt.hash(tourguideRegInfo.password, salt);
        return this.tourguideRepo.save(tourguideRegInfo);
    }
};
exports.providerService = providerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provider_entity_1.providerEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(civilian_entity_1.civilianEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(tourguide_entity_1.TourGuideEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], providerService);
//# sourceMappingURL=provider.service.js.map