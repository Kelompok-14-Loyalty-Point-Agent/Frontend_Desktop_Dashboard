import { useSelector } from "react-redux";

export const useUpdateStockType = () =>
  useSelector((state) => state.updateStockDetail.type);
