import { useSelector } from "react-redux";

export const useUpdateCustomerType = () =>
  useSelector((state) => state.updateCustomerDetail.type);
