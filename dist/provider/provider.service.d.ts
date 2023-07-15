import { civilianRegDTO } from "src/civilian/civilian.dto";
import { civilianEntity } from "src/civilian/civilian.entity";
import { Repository } from "typeorm";
import { providerLoginDTO, providerRegDTO, providerUpdateDTO } from "./provider.dto";
import { providerEntity } from "./provider.entity";
import { TourGuideRegDTO } from "src/tourguide/tourguide.dto";
import { TourGuideEntity } from "src/tourguide/tourguide.entity";
export declare class providerService {
    private providerRepo;
    private civilianRepo;
    private tourguideRepo;
    constructor(providerRepo: Repository<providerEntity>, civilianRepo: Repository<civilianEntity>, tourguideRepo: Repository<TourGuideEntity>);
    regprovider(providerRegInfo: providerRegDTO): Promise<providerEntity>;
    loginprovider(providerLoginInfo: providerLoginDTO): Promise<boolean>;
    uploadprovider(fileName: string, username: string): Promise<"provider Photo Uploaded!" | "provider Photo Couldn't be Uploaded!">;
    regcivilian(civilianRegInfo: civilianRegDTO, providerUsername: string): Promise<civilianEntity>;
    getcivilianByproviderId(providerUsername: string): Promise<providerEntity[]>;
    updateproviderInfo(providerUpdateInfo: providerUpdateDTO, providerUsername: string): Promise<providerEntity>;
    removeprovider(providerUsername: string): Promise<void>;
    removecivilian(civilianId: number, providerUsername: string): Promise<"civilian Deleted!" | "Couldn't Delete!">;
    regTourGuide(tourguideRegInfo: TourGuideRegDTO): Promise<TourGuideEntity>;
}
