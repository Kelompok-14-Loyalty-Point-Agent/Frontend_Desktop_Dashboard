import { useSelector } from "react-redux";

export const useProfileSelector = () =>
  useSelector((state) => state?.getProfile?.profile[0]);

export const useTypeProfileSelector = () =>
  useSelector((state) => state?.getProfile?.type);
