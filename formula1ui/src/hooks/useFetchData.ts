import { useState, useEffect } from 'react';
import { PaginatedResponse } from '../interfaces/PaginatedResponse';
import { RacesPaginated } from '../interfaces/Race';

export function useFetchData<T>(
    url: string) {
    const [data, setData] = useState<PaginatedResponse<T> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: RacesPaginated) => {
                const instance = new PaginatedResponse<T>(data);
                setData(instance);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}
