import { useState, useEffect } from "react";
import axios from "axios";

const useApiFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        !!response.data && setData(response.data);
        setIsLoad(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return { data, isLoad };
};

export default useApiFetch;
