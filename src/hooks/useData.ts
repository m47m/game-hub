import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
	count:number;
	results:T[];
}

const useGames = <T>(endpoing:string) => {
	const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
		const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoing,{signal:controller.signal})
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
				if(err.message === 'canceled') return;
        setError(err.message);
        setIsLoading(false);
      });

			return ()=>controller.abort();
  },[]);

	return {data,error,isLoading}
}

export default useGames;