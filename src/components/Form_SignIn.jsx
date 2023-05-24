// import React from 'react';
import { ViewIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

const Form_SignIn = () => {
	return (
		<Box
			border='1px'
			borderColor='#DFE0EB'
			rounded={'xl'}
			shadow='15px 15px 22px rgba(0, 0, 0, 0.2)'
			px={12}
			py='60px'
			textAlign='center'>
			<Box pb={12}>
				<Heading fontSize={32} textAlign={'center'} mb={3}>
					Sign In
				</Heading>
				<Text
					fontSize={16}
					fontWeight={400}
					color={useColorModeValue('cyan.700')}
					textAlign={'center'}
					textShadow='0 4px 4px #DFE0EB'>
					It’s nice to see you, please sign in to continue!
				</Text>
			</Box>
			<Box>
				<form>
					<FormControl id='email'>
						<FormLabel fontWeight={700}>Email Address</FormLabel>
						<Input placeholder='Enter your email' fontSize={14} type='email' />
					</FormControl>
					<FormControl id='password' mt={3}>
						<FormLabel fontWeight={700}>Password</FormLabel>
						<InputGroup>
							<Input
								placeholder='Please Enter Your Password'
								fontSize={14}
								type='password'
							/>
							<InputRightElement>
								<ViewIcon />
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<Stack isInline justifyContent='end' mt={8}>
						<Link
							fontSize={14}
							fontWeight={400}
							color={useColorModeValue('red.600')}>
							Forgot Password?
						</Link>
					</Stack>
					<Button type='submit' w='full' colorScheme='facebook' mt={12}>
						Sign In
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default Form_SignIn;
