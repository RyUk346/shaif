import { providerEntity } from "src/provider/provider.entity";
export declare class civilianEntity {
    id: number;
    name: string;
    username: string;
    email: string;
    contact: number;
    age: number;
    gender: string;
    profession: string;
    providerID: number;
    provider: providerEntity;
}
