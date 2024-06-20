import { useState, useEffect, useCallback } from 'react';

export const useUniqViewSeconds = () => {
    const [uniqueViewSeconds, setUniqueViewSeconds] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchData = useCallback(
        async () => {
            try {
                const response = await fetch('https://664ac067a300e8795d42d1ff.mockapi.io/api/v1/numbers/1');
                const data = await response.json();
                const viewSeconds: number[] = data.numbers.flat();
                const uniqueViewSecondsSet = new Set(viewSeconds);
                const uniqueViewSecondsArray = Array.from(uniqueViewSecondsSet).sort((a, b) => a - b);
                setUniqueViewSeconds(uniqueViewSecondsArray);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        }
    , [])
  
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { uniqueViewSeconds, loading, error };
};
