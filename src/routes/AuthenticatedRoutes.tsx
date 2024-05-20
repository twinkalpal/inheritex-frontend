
import DefaultLayout from '@layout/defaultLayout';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from '@components/Profile';



const AuthenticatedRoutes = () => {
	return (
		<div id='main'>
			<DefaultLayout>
					<Suspense>
						<Routes>
							<Route path='profile'>
								<Route
									index
									element={
											<Profile/>
									}
								/>
								
							</Route>
						
							<Route path='*' element={<Navigate replace to='/404' />} />
						</Routes>
					</Suspense>
			</DefaultLayout>
		</div>
	);
};

export default AuthenticatedRoutes;