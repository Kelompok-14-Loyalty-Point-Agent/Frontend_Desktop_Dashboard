import { useSelector } from "react-redux";

export const useStockInternetDataSelector = () =>
  useSelector((state) => state?.getStockInternetData?.stockInternetDataValue);

export const useStockInternetDataType = () =>
  useSelector((state) => state?.getStockInternetData?.type);
