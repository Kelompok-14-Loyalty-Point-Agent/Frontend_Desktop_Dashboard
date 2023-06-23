import { useSelector } from "react-redux";

export const useDataAdminSelector = () =>
  useSelector((state) => state?.getDataAdmin?.data);
