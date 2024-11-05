import { RacesPaginated } from "./Race";

export class PaginatedResponse<T> {
    items: T[];
    pageNumber: number = 0;
    pageSize: number = 0;
    totalCount: number = 0;

    constructor(data: RacesPaginated) {
        this.items = data.races as T[] || [];
        Object.assign(this, data);
    }
}
