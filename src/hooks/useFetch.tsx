import React, { useEffect, useState } from "react";

type Props = {
  url: string;
  method: string;
};

const useFetch = (props: Props) => {

  console.log(props)

  const { url, method } = props;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { method });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchdata();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
