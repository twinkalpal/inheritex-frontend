
import { TAppDispatch, TRootState } from '@models/redux.store';
import { signInAsyncThunk } from '@store/auth/auth-async-thunk';
import { useEffect } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface LoginForm {
	email: string;
	password: string;
	rememberMe: boolean;
}

const Login = () => {

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting, errors }
	} = useForm<LoginForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		}
	});

	const auth = useSelector((state: TRootState) => ({
		authenticated: !!state.auth.token
	}));

	const isAuthenticated = auth.authenticated;

	useEffect(() => {
		if (isAuthenticated) {
		  navigate('/profile', { replace: true });
		}
	  }, [isAuthenticated]);

	
	const dispatch: TAppDispatch = useDispatch();
	const formLogin = async (data: LoginForm) => {
		localStorage.setItem('rememberMe', `${data.rememberMe}`);
		dispatch(
			signInAsyncThunk({
				email: data.email,
				password: data.password,
			})
		).unwrap().then(() => {
			navigate('/profile');
		})
	};

	return (
		<div className='d-flex flex-column justify-content-center text-center min-vh-100'>
			<Container>
				<Form onSubmit={handleSubmit(formLogin)}>
					<Card className='auth-box'>
					<Card.Body>
							
							<h2 className='h3 mb-3'>Sign In</h2>
						
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
											message: 'Please enter valid password'
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
											message: 'Password required'
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
								Sign In
							</Button>
							<div className='d-flex align-items-center justify-content-between text-start fs-6'>
								
								<Link to='/signup' className='text-decoration-none text-end'>
									Don't have an account? Sign Up
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Form>
			</Container>
		</div>
	);
};
export default Login;