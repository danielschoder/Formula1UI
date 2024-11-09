import { Constructor } from "./Constructor";
import { Driver } from "./Driver";
import { Session } from "./Session";

export interface Result {
    id: string;
    ranking: string;
    points: number;
    session: Session;
    driver: Driver;
    constructor: Constructor;
}
