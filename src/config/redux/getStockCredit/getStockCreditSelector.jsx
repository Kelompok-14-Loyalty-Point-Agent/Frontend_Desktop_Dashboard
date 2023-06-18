import { useSelector } from "react-redux";

export const useStockCreditSelector = () =>
  useSelector((state) => state?.getStockCredit?.stockCreditValue);

export const useStockCreditType = () =>
  useSelector((state) => state?.getStockCredit?.type);
