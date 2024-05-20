// import Logo from '@assets/images/logo.svg';
import { TAppDispatch } from '@models/redux.store';
import {  signUpAsyncThunk } from '@store/auth/auth-async-thunk';
import { logOutAction } from '@store/auth/auth-slice';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface SignUpForm {
	firstName: string;
	lastName: string;
	mobile: string;
	email: string;
	password: string;
	
}

const SignUp = () => {

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		// watch,
		formState: { isSubmitting, errors }
	} = useForm<SignUpForm>({
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			lastName: '',
			mobile: '',
			email: '',
			password:  '',
			
		}
	});


	const dispatch: TAppDispatch = useDispatch();

	const formSignup = async (data: SignUpForm) => {
		// localStorage.setItem('rememberMe', `${data.rememberMe}`);
		console.log(data)
		dispatch(
			signUpAsyncThunk({
				firstName: data.firstName,
				lastName: data.lastName,
				mobile: data.mobile,
				email: data.email,
				password: data.password,
				
			})
		).unwrap().then(() => {
            // localStorage.clear();
            dispatch(logOutAction())
			navigate('/');
		})
	};

	return (
		<div className='d-flex flex-column justify-content-center text-center min-vh-100'>
			<Container>
				<Form onSubmit={handleSubmit(formSignup)}>
					<Card className='auth-box'>
					<Card.Body>
						<Card.Header className='h3 mb-3'>Sign Up</Card.Header>
							
							
							{/* <p className='mb-4'>Enter your credentials to access the panel</p> */}
                            <Form.Group className='text-start mb-3 focus:border-gray-500' controlId='firstName'>
								<Form.Control
									type='firstName'
									size='lg'
									// name='firstName'
									placeholder='First Name'
									{...register('firstName', {
										required: {
											value: true,
											message: 'Name Required'
										},
										pattern: {
											value:  /^[a-zA-Z]+$/,
											message: 'Please enter valid first name'
										}
									})}
								/>
								<Form.Text className='text-danger'>{errors.firstName?.message}</Form.Text>
							</Form.Group>
							<Form.Group className='text-start mb-3 focus:border-gray-500' controlId='lastName'>
								<Form.Control
									type='name'
									size='lg'
									placeholder='Last Name'
									{...register('lastName', {
										required: {
											value: true,
											message: 'Last Name Required'
										},
										pattern: {
											value:  /^[a-zA-Z]+$/,
											message: 'Please enter valid last name'
										}
									})}
								/>
								<Form.Text className='text-danger'>{errors.lastName?.message}</Form.Text>
							</Form.Group>
							<Form.Group className='text-start mb-3 focus:border-gray-500' controlId='mobile'>
								<Form.Control
									type='phone'
									size='lg'
									placeholder='Phone Number'
									{...register('mobile', {
										required: {
											value: true,
											message: 'Phone number required'
										},
										minLength: {
											value: 10,
											message: 'Please enter phone number'
										},
										maxLength: {
											value: 10,
											message: 'Please enter phone number'
										},
										pattern: {
											value: /^[0-9\b]+$/,
											message: 'Please enter valid phone number'
										}
									})}
								/>
								<Form.Text className='text-danger'>{errors.mobile?.message}</Form.Text>
							</Form.Group>
							<Form.Group className='text-start mb-3' controlId='email'>
								<Form.Control
									type='email'
									size='lg'
									placeholder='Email id'
									{...register('email', {
										required: {
											value: true,
											message: 'Email Required'
										},
										pattern: {
											value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
											message: 'Please enter valid email'
										}
									})}
								/>
								<Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
							</Form.Group>
                            
							<Form.Group className='text-start mb-3 mb-lg-4' controlId='password'>
								<Form.Control
									type='password'
									size='lg'
									placeholder='Password'
									{...register('password', {
										required: {
											value: true,
											message: 'Password Required'
										},
								
										pattern:{
											value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
											,
											message:"Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters."
										}
									})}
								/>
								<Form.Text className='text-danger'>{errors.password?.message}</Form.Text>
							</Form.Group>
							<Button
								variant='primary'
								size='lg'
								className='w-100 mb-3 mb-lg-4'
								type='submit'
								disabled={isSubmitting}
							>
								Sign Up
							</Button>
							<div className='d-flex align-items-center justify-content-between text-start fs-6'>
						
								<Link to='/' className='text-decoration-none text-end'>
									Already have an account?  Sign In
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Form>
			</Container>
		</div>
	);
};
export default SignUp;