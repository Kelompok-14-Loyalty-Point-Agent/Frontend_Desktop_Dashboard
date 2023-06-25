import { useSelector } from "react-redux";

export const useUpdatePictureType = () =>
  useSelector((state) => state?.updatePicture?.type);
