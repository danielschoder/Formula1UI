import { Circuit } from "./Circuit";
import { GrandPrix } from "./GrandPrix";

export interface RacesPaginated {
    races: Race[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
}

export interface Race {
    id: string;
    seasonYear: number;
    round: number;
    grandPrix: GrandPrix;
    circuit: Circuit;
}
