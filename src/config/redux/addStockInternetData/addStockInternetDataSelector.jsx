import { useSelector } from "react-redux";

export const useAddStockInternetType = () =>
  useSelector((state) => state?.addStockInternetData?.type);
