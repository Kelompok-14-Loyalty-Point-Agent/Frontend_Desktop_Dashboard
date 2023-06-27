import {
	Avatar,
	Box,
	Card,
	Flex,
	Heading,
	Image,
	Text,
	Center,
	SimpleGrid,
	FormControl,
	FormLabel,
	Input,
	Button,
	useToast,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import NavbarDashboard from '../components/NavbarDashboard';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTransactionDetailSelector } from '../config/redux/getCustomerTransactionDetail/getCustomerTransactionDetailSelector';
import { useEffect, useState } from 'react';
import { get_transactionDetail } from '../config/redux/getCustomerTransactionDetail/getCustomerTransactionDetailThunk';
import { formatDateTime, formatNumber } from '../utils/HelperMethod';
import { useUpdatePointType } from '../config/redux/updatePoint/updatePointSelector';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { update_point } from '../config/redux/updatePoint/updatePointThunk';

const CustomerTransactionDetail = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const transactionDetail = useTransactionDetailSelector();
	const usePointType = useUpdatePointType();
	const toast = useToast();
	const [amountError, setAmountError] = useState(false);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		dispatch(get_transactionDetail({ id: params.id }));

		if (
			usePointType === 'transaction/update_transactionDetailPoint/fulfilled'
		) {
			dispatch(get_transactionDetail({ id: params.id }));
		}
	}, [usePointType]);

	const formikPoint = useFormik({
		initialValues: {
			id: transactionDetail?.data?.id,
			point: transactionDetail?.data?.point || '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			point: Yup.number().required('Required'),
		}),
		onSubmit: (values) => {
			dispatch(update_point(values));
			toast({
				title: 'Send Successful',
				status: 'success',
				position: 'top',
				duration: 3000,
			});
			setAmountError(false);
		},
	});

	const renderPaymentMethod = (paymentMethod) => {
		if (
			paymentMethod === 'GoPay' ||
			paymentMethod === 'Go Pay' ||
			paymentMethod === 'Gopay'
		) {
			return (
				<Image
					boxSize='40px'
					src='../paymentLogo/gopay.png'
					alt={paymentMethod}
				/>
			);
		}
		if (paymentMethod === 'BNI') {
			return (
				<Image
					boxSize='40px'
					src='../paymentLogo/BNI.png'
					alt={paymentMethod}
				/>
			);
		}
		if (paymentMethod === 'BRI') {
			return (
				<Image
					boxSize='40px'
					src='../paymentLogo/BRI.png'
					alt={paymentMethod}
				/>
			);
		}
		if (
			paymentMethod === 'shoope' ||
			paymentMethod === 'Shopee' ||
			paymentMethod === 'Shoope'
		) {
			return (
				<Image
					boxSize='40px'
					src='../paymentLogo/shopee.png'
					alt={paymentMethod}
				/>
			);
		}
		if (paymentMethod === 'Dana') {
			return (
				<Image
					boxSize='40px'
					src='../paymentLogo/dana.png'
					alt={paymentMethod}
				/>
			);
		}
	};

	const renderSuccessUpdatePoint = (amount, point) => {
		const countAmount_point = amount * 0.001;
		if (countAmount_point !== point) {
			return setAmountError(true);
		} else {
			return setAmountError(false);
		}
	};

	useEffect(() => {
		renderSuccessUpdatePoint(state.price, state.point);
	}, []);

	const handleBackCustomerTransaction = () => {
		navigate('/transactions');
	};

	return (
		<>
			<Flex height='100vh'>
				<Sidebar />
				<Box px={10} flex={'1'}>
					<NavbarDashboard />
					<Box mx={14}>
						<Text fontSize={32} fontFamily='heading' fontWeight={700} mb={8}>
							Customer Transaction
						</Text>
						<SimpleGrid columns={6} mb={6} ms='50px'>
							<Text as='b' textAlign='center' fontFamily='heading'>
								Name
							</Text>
							<Text as='b' textAlign='center' fontFamily='heading' ps='55px'>
								Description
							</Text>
							<Text as='b' textAlign='center' fontFamily='heading' ps='30px'>
								Sent To
							</Text>
							<Text as='b' textAlign='center' fontFamily='heading'>
								Amount
							</Text>
							<Text as='b' textAlign='center' fontFamily='heading' pe='30px'>
								Date
							</Text>
							<Text as='b' textAlign='center' fontFamily='heading' pe='55px'>
								Bonus Tpoint
							</Text>
						</SimpleGrid>
						<Box maxHeight={800} p={4}>
							<Card
								bg='#334CA9'
								color='white'
								rounded={'2xl'}
								px={10}
								py={5}
								mb={5}
								shadow='0 0 15px 4px rgba(0, 0, 0, 0.25)'
								cursor='pointer'>
								<Flex alignItems='center'>
									<Avatar
										size='lg'
										name={transactionDetail?.data?.user_name}
										src={transactionDetail?.data?.url}
									/>
									<SimpleGrid
										columns={6}
										alignItems='center'
										textAlign='center'
										w='100%'>
										<Box ms={6} textAlign='start'>
											<Heading size='sm' mb={1}>
												{transactionDetail?.data?.user_name}
											</Heading>
											<Text fontSize={14}>
												{transactionDetail?.data?.member} member
											</Text>
										</Box>
										<Text as='b' fontSize={14} fontFamily='heading'>
											{transactionDetail?.data?.description}
										</Text>
										<Center>
											<Box bg='white' p={2} rounded={'xl'} w='56px'>
												{renderPaymentMethod(
													transactionDetail?.data?.payment_method
												)}
											</Box>
										</Center>
										<Text as='b' fontSize={14} fontFamily='heading'>
											{formatNumber(transactionDetail?.data?.price)}
										</Text>
										<Text as='b' fontSize={14} fontFamily='heading'>
											{formatDateTime(
												new Date(transactionDetail?.data?.created_at)
											)}
										</Text>
										<Text as='b' fontSize={14} fontFamily='heading'>
											+{transactionDetail?.data?.point}
										</Text>
									</SimpleGrid>
								</Flex>
							</Card>
							{amountError ? (
								<>
									<Text
										fontSize={20}
										fontFamily='body'
										color='#BE4057'
										my={10}
										w={800}>
										There is an error in the number of points that the user gets
										with the nominal transaction made! You as an admin can
										submit less points.
									</Text>
									<form onSubmit={formikPoint.handleSubmit}>
										<FormControl id='point'>
											<FormLabel fontSize={20} color='#2DB5AB'>
												Input coin
											</FormLabel>
											<Input
												type='number'
												id='point'
												w='89px'
												h='52px'
												fontSize={20}
												borderRadius={10}
												borderColor='#313131'
												_hover={{ borderColor: '#313131' }}
												{...formikPoint.getFieldProps('point')}
												isInvalid={
													formikPoint.touched.point && formikPoint.errors.point
												}
											/>
											{formikPoint.touched.point && formikPoint.errors.point && (
												<Text color='#BE4057' textAlign='start' mt={1}>
													{formikPoint.errors.point}
												</Text>
											)}
										</FormControl>
										<Button
											type='submit'
											id='send'
											bg='#030F51'
											color='white'
											fontFamily='poppins'
											fontWeight={400}
											_hover={{
												background: '#385898',
											}}
											w={228}
											h={33}
											mt={4}>
											Send
										</Button>
									</form>
								</>
							) : (
								<Text
									fontSize={20}
									fontFamily='body'
									color='#6AB044'
									my={10}
									w={800}>
									The transaction nominal and the points obtained are correct!
								</Text>
							)}
							<Flex mt='300px' justifyContent='end'>
								<Button
									type='button'
									id='back'
									bg='#030F51'
									color='white'
									fontFamily='poppins'
									fontWeight={400}
									_hover={{
										background: '#385898',
									}}
									w={125}
									h={33}
									onClick={handleBackCustomerTransaction}>
									Back
								</Button>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default CustomerTransactionDetail;
