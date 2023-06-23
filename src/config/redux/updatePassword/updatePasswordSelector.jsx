import { useSelector } from "react-redux";

export const useUpdatePasswordType = () =>
  useSelector((state) => state?.updatePassword?.type);
