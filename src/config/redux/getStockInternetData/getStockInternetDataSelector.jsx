import { useSelector } from "react-redux";

export const useStockInternetDataSelector = () =>
  useSelector((state) => state?.getStockInternetData?.stockInternetDataValue);
