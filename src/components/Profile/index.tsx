
import { TRootState } from '@models/redux.store';

import { useEffect } from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';



const Profile = () => {

	const profileData: any = useSelector((state: TRootState) =>
		state.auth.data
	)
	useEffect(() => { console.log(profileData, "===>profileData") }, [profileData])

	return (
		<div className='d-flex flex-column justify-content-center text-center min-vh-100'>
			<Container>
				<Form >
					<Card className='auth-box'>
						<Card.Body>
							<Card.Header className='h3 mb-3'>Profile Details</Card.Header>
							<Form.Group className='text-start mb-3 focus:border-gray-500' controlId='firstName'>
								<Form.Control
									type='firstName'
									size='lg'
									// name='firstName'
									placeholder='First Name'
									disabled={true}
									value={profileData?.firstName}
								// {...register('firstName', {
								// 	required: {
								// 		value: true,
								// 		message: 'Name Required'
								// 	},
								// 	// pattern: {
								// 	// 	value:  /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
								// 	// 	message: 'Please enter valid fist name'
								// 	// }
								// })}
								/>
								{/* <Form.Text className='text-danger'>{errors.firstName?.message}</Form.Text> */}
							</Form.Group>
							<Form.Group className='text-start mb-3 focus:border-gray-500' controlId='email'>
								<Form.Control
									type='name'
									size='lg'
									placeholder='Last Name'
									disabled={true}
									defaultValue={profileData?.lastName}
								// {...register('lastName', {
								// 	required: {
								// 		value: true,
								// 		message: 'Last Name Required'
								// 	},
								// 	// pattern: {
								// 	// 	value: /^[a-zA-Z]$/,
								// 	// 	message: 'notValidEmail'
								// 	// }
								// })}
								/>
								{/* <Form.Text className='text-danger'>{errors.lastName?.message}</Form.Text> */}
							</Form.Group>
							<Form.Group className='text-start mb-3 focus:border-gray-500' controlId='email'>
								<Form.Control
									type='phone'
									size='lg'
									placeholder='Phone Number'
									disabled={true}
									defaultValue={profileData?.mobile}
								// {...register('mobile', {
								// 	required: {
								// 		value: true,
								// 		message: 'Phone Number Required'
								// 	},
								// 	// pattern: {
								// 	// 	value: /^[a-zA-Z]$/,
								// 	// 	message: 'notValidEmail'
								// 	// }
								// })}
								/>
								{/* <Form.Text className='text-danger'>{errors.lastName?.message}</Form.Text> */}
							</Form.Group>
							<Form.Group className='text-start mb-3' controlId='email'>
								<Form.Control
									type='email'
									size='lg'
									placeholder='Email id'
									disabled={true}
									defaultValue={profileData?.email}
								// {...register('email', {
								// 	required: {
								// 		value: true,
								// 		message: 'Email Required'
								// 	},
								// 	pattern: {
								// 		value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								// 		message: 'Please enter valida email'
								// 	}
								// })}
								/>
								{/* <Form.Text className='text-danger'>{errors.email?.message}</Form.Text> */}
							</Form.Group>




						</Card.Body>
					</Card>
				</Form>
			</Container>
		</div>
	);
};
export default Profile;