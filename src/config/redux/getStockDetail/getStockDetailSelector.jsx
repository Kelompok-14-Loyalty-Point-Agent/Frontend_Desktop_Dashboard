import { useSelector } from "react-redux";

export const useStockDetailSelector = () =>
  useSelector((state) => state?.getStockDetail?.datas);
