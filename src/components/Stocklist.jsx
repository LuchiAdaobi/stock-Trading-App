import { useState, useEffect } from "react";
import finnHub from "../apis/finnhub";

export default function StockList() {
  const [stock, setStock] = useState([]);
  const [watchList, setWatchList] = useState(["GOOGL", "AMZN", "MSFT"]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map(async (stock) => {
            const response = await finnHub.get("/quote", {
              params: {
                symbol: stock,
              },
            });
            const results = response.map(res => {
              return {
                  symbol: response.config.params.symbol, 
                   data: response.data,
              }  
            })
            return(results)
          })
        );
        if (isMounted) {
          setStock(results);
        }
        console.log(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return (
    <section>
      <h4>StockList page</h4>
    </section>
  );
}
