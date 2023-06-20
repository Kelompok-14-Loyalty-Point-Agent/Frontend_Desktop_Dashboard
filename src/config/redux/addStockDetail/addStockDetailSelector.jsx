import { useSelector } from "react-redux";

export const useStockAddDetailSelector = () =>
  useSelector((state) => state?.addStockDetail?.datas);

export const useStockAddDetailProviderSelector = () =>
  useSelector((state) => state?.addStockDetail?.inputProvider);

export const useAddStockDetailType = () =>
  useSelector((state) => state?.addStockDetail?.type);
