import { useSelector } from "react-redux";

export const useAddStockType = () =>
  useSelector((state) => state.addStockInternetData.type);
