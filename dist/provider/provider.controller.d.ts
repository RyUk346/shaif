/// <reference types="multer" />
import { TourGuideRegDTO } from "src/tourguide/tourguide.dto";
import { civilianRegDTO } from "src/civilian/civilian.dto";
import { providerLoginDTO, providerRegDTO, providerUpdateDTO } from "./provider.dto";
import { providerService } from "./provider.service";
export declare class providerController {
    private readonly providerService;
    constructor(providerService: providerService);
    regprovider(providerRegInfo: providerRegDTO): any;
    loginprovider(providerLoginInfo: providerLoginDTO, session: any): Promise<"provider Login Successful!" | "provider Login Failed!">;
    uploadprovider(photoObj: Express.Multer.File, session: any): Promise<"provider Photo Uploaded!" | "provider Photo Couldn't be Uploaded!">;
    regcivilian(civilianRegInfo: civilianRegDTO, session: any): Promise<import("../civilian/civilian.entity").civilianEntity>;
    getcivilianByproviderId(session: any): any;
    updateproviderInfo(providerUpdateInfo: providerUpdateDTO, session: any): any;
    removeprovider(session: any): any;
    removecivilian(civilianId: number, session: any): any;
    regTourGuide(tourguideRegInfo: TourGuideRegDTO): any;
}
