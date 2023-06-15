import { useSelector } from "react-redux";

export const useStockCreditSelector = () =>
  useSelector((state) => state.getStocks.stockCreditValue);
