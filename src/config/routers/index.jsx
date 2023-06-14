import ForgotPassword from '../../pages/ForgotPassword';
import DataCreditStock from '../../pages/DataCreditStock';
import CreateNewPassword from '../../pages/CreateNewPassword';
import LandingPage from '../../pages/LandingPage';
import VerifyEmail from '../../pages/VerifyEmail';
import SignIn from '../../pages/SignIn';
import CustomerData from '../../pages/CustomerData';
import DashboardHome from '../../pages/DashboardHome';
import DashboardProfile from '../../pages/DashboardProfile';
import CashOutStock from '../../pages/CashOutStock';
import AddStock from '../../pages/AddStock';
import CustomerTransaction from '../../pages/CustomerTransaction';
import { useTokenSelector } from '../redux/signin/SignInSelector';
import { useNavigate, Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
	const token = useTokenSelector();
	// const navigate = useNavigate();

	console.log(token);

	if (token) {
		return children;
	} else {
		<Navigate to='/signin' replace={true} />;
	}
};

const routers = [
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRouter>
				<DashboardHome />,
			</PrivateRouter>
		),
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/forgot',
		element: <ForgotPassword />,
	},
	{
		path: '/verify',
		element: <VerifyEmail />,
	},
	{
		path: '/newpassword',
		element: <CreateNewPassword />,
	},
	{
		path: '/forgot',
		element: <ForgotPassword />,
	},
	{
		path: '/profile',
		element: <DashboardProfile />,
	},
	{
		path: '/customers',
		element: <CustomerData />,
	},
	{
		path: '/transactions',
		element: <CustomerTransaction />,
	},
	{
		path: '/stocks',
		element: <DataCreditStock />,
	},
	{
		path: '/stocks/add',
		element: <AddStock />,
	},
	{
		path: '/cashout',
		element: <CashOutStock />,
	},
];

export default routers;
