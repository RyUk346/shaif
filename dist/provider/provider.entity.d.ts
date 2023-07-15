import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { civilianEntity } from "src/civilian/civilian.entity";
export declare class providerEntity {
    id: number;
    name: string;
    username: string;
    email: string;
    contact: number;
    password: string;
    photoFileName: string;
    civilians: civilianEntity[];
    tourguides: TourGuideEntity[];
}
