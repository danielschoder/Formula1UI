import { useState, useEffect } from 'react';
import { PaginatedResponse } from '../interfaces/PaginatedResponse';

export function useFetchData<T>(url: string, itemsName: string, page: number, pageSize: number) {
    const [data, setData] = useState<PaginatedResponse<T> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiUrl = `${url}?pageNumber=${page}&pageSize=${pageSize}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: Record<string, never>) => {
                const instance = new PaginatedResponse<T>(data, itemsName);
                setData(instance);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url, itemsName, page, pageSize]);

    return { data, loading, error };
}
