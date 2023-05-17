import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T>{
	count:number;
	results:T[];
}

const useGames = <T>(endpoing:string,requesConfig?:AxiosRequestConfig,deps?:any[]) => {
	const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
		const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoing,{signal:controller.signal,...requesConfig})
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
  },deps ? [...deps]:[]);

	return {data,error,isLoading}
}

export default useGames;