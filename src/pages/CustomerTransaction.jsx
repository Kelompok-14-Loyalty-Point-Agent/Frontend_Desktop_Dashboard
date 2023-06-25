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
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import NavbarDashboard from '../components/NavbarDashboard';
import { useTransactionSelector } from '../config/redux/getCustomerTransaction/getCustomerTransactionSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_transaction } from '../config/redux/getCustomerTransaction/getCustomerTransactionThunk';
import { formatDateTime, formatNumber } from '../utils/HelperMethod';

const CustomerTransaction = () => {
	const dispatch = useDispatch();
	const transactions = useTransactionSelector();

	console.log(transactions);

	useEffect(() => {
		dispatch(get_transaction());
	}, []);

	const renderPaymentMethod = (paymentMethod) => {
		if (paymentMethod === 'GoPay') {
			return (
				<Image
					boxSize='40px'
					src='./paymentLogo/gopay.png'
					alt={paymentMethod}
				/>
			);
		}
		if (paymentMethod === 'BNI') {
			return (
				<Image boxSize='40px' src='./paymentLogo/BNI.png' alt={paymentMethod} />
			);
		}
		if (paymentMethod === 'BRI') {
			return (
				<Image boxSize='40px' src='./paymentLogo/BRI.png' alt={paymentMethod} />
			);
		}
		if (paymentMethod === 'Shopee') {
			return (
				<Image
					boxSize='40px'
					src='./paymentLogo/shopee.png'
					alt={paymentMethod}
				/>
			);
		}
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
						<Box maxHeight={800} overflowY='auto' p={4}>
							{transactions?.data?.map((transaction) => (
								<Card
									key={transaction.id}
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
											name='Maria Belina'
											src='./maria belina.svg'
										/>
										<SimpleGrid
											columns={6}
											alignItems='center'
											textAlign='center'
											w='100%'>
											<Box ms={6} textAlign='start'>
												<Heading size='sm' mb={1}>
													Maria Belina
												</Heading>
												<Text fontSize={14}>Gold Member</Text>
											</Box>
											<Text as='b' fontSize={14} fontFamily='heading'>
												{transaction.description}
											</Text>
											<Center>
												<Box bg='white' p={2} rounded={'xl'} w='56px'>
													{renderPaymentMethod(transaction.payment_method)}
												</Box>
											</Center>
											<Text as='b' fontSize={14} fontFamily='heading'>
												{formatNumber(transaction.price)}
											</Text>
											<Text as='b' fontSize={14} fontFamily='heading'>
												{formatDateTime(new Date(transaction.created_at))}
											</Text>
											<Text as='b' fontSize={14} fontFamily='heading'>
												+{transaction.point}
											</Text>
										</SimpleGrid>
									</Flex>
								</Card>
							))}
						</Box>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default CustomerTransaction;
