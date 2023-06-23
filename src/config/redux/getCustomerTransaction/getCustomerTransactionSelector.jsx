import { useSelector } from 'react-redux';

export const useTransactionSelector = () =>
	useSelector((state) => state?.getCustomerTransaction?.transactions);
