import { useState, useEffect } from 'react';
import { getProducts } from 'api';

const useProductsData = id => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      setIsError(null);
      try {
        const response = await getProducts(id);
        setData(response.data);
        setIsLoaded(true);
      } catch (err) {
        setIsError(true);
      }
    };
    fetchData();
  }, [id]);

  return [data, isLoaded, isError];
};

export default useProductsData;
