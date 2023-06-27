import { useSelector } from 'react-redux';

export const useTransactionDetailSelector = () =>
	useSelector(
		(state) => state?.getCustomerTransactionDetail?.transactionDetail
	);
