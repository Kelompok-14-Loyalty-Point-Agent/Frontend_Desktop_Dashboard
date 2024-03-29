import { useSelector } from "react-redux";

export const useAddStock = () =>
  useSelector((state) => state.addStock.addStock);

export const useGetProvidersStock = () =>
  useSelector((state) => state.addStock.providers);

export const useAddStockCreditType = () =>
  useSelector((state) => state?.addStock?.type);
