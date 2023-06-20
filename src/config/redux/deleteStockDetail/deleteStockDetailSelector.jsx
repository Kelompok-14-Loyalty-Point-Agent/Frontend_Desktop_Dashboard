import { useSelector } from "react-redux";

export const useDeleteStockType = () =>
  useSelector((state) => state.deleteStockDetail.type);

export const useDeleteStockState = () =>
  useSelector((state) => state.deleteStockDetail.datas);
