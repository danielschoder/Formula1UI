import { Circuit } from "./Circuit";
import { GrandPrix } from "./GrandPrix";

export class RacesPaginated {
    items: Race[] = [];
    races: Race[] = [];
    pageNumber: number = 0;
    pageSize: number = 0;
    totalCount: number = 0;
}

export interface Race {
    id: string;
    seasonYear: number;
    round: number;
    grandPrix: GrandPrix;
    circuit: Circuit;
}
