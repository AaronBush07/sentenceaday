import {useState, useEffect} from 'react';

export const useHttp = (url, dependencies) => {
  const [isLoading, setLoading] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setLoading(false);
        setFetchedData(data);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
