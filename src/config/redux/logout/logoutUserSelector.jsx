import { useSelector } from "react-redux";

export const useLogoutUserDatasSelector = () =>
  useSelector((state) => state?.logoutUser?.datas);

export const useLogoutUserType = () =>
  useSelector((state) => state?.logoutUser?.type);
