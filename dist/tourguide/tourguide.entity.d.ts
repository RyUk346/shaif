import { providerEntity } from "src/provider/provider.entity";
export declare class TourGuideEntity {
    id: number;
    name: string;
    username: string;
    email: string;
    contact: number;
    age: number;
    location: string;
    password: string;
    providers: providerEntity[];
}
