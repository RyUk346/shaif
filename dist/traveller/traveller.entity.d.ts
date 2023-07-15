import { ManagerEntity } from "src/manager/manager.entity";
export declare class TravellerEntity {
    id: number;
    name: string;
    username: string;
    email: string;
    contact: number;
    age: number;
    gender: string;
    profession: string;
    managerID: number;
    manager: ManagerEntity;
}
