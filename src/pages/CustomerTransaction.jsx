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

const CustomerTransaction = () => {
	const dispatch = useDispatch();
	const transactions = useTransactionSelector();

	console.log(transactions);

	useEffect(() => {
		dispatch(get_transaction());
	}, []);

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
						<Box maxHeight={820} overflowY='auto'>
							{transactions?.data?.map((transaction) => (
								<Card
									key={transaction.id}
									bg='#334CA9'
									color='white'
									rounded={'2xl'}
									px={10}
									py={5}
									mb={5}
									shadow='0 4px 25px 1px rgba(0, 0, 0, 0.25)'
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
													<Image boxSize='40px' src='./image 25.svg' alt='' />
												</Box>
											</Center>
											<Text as='b' fontSize={14} fontFamily='heading'>
												{transaction.price}
											</Text>
											<Text as='b' fontSize={14} fontFamily='heading'>
												25/04/23 | 14.20 WIB
											</Text>
											<Text as='b' fontSize={14} fontFamily='heading'>
												{transaction.point}
											</Text>
										</SimpleGrid>
									</Flex>
								</Card>
							))}
						</Box>
						<Center>
							<Image
								boxSize='30px'
								src='./icons/black/arrowdown2.svg'
								alt=''
								cursor='pointer'
							/>
						</Center>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default CustomerTransaction;
