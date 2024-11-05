export interface DriversPaginated {
    races: Driver[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
}

export interface Driver {
    id: string;
    name: string;
}
