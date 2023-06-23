import { useSelector } from "react-redux";

export const useDeleteCustomerType = () =>
  useSelector((state) => state.deleteCustomer.type);

export const useDeleteCustomerState = () =>
  useSelector((state) => state.deleteCustomer.deleteCustomerData);
