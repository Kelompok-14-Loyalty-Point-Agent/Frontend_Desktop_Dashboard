import { useSelector } from "react-redux";

export const useCustomerSelector = () =>
  useSelector((state) => state.getCustomer.customers);
