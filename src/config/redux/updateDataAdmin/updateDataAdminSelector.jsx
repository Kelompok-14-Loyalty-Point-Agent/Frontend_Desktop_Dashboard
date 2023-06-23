import { useSelector } from "react-redux";

export const useUpdateDataAdminType = () =>
  useSelector((state) => state?.updateDataAdmin?.type);
