import { useSelector } from 'react-redux';

export const useUpdatePointType = () =>
	useSelector((state) => state.updatePoint.type);
