import Autocomplete from "../components/Autocomplete";
import StockList from "../components/Stocklist";

export default function StockOverviewPage() {
  return (
    <section>
      <h4>Stock Overview page</h4>
      <Autocomplete/>
      <StockList />
    </section>
  );
}
