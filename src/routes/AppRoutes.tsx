import  { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '@components/auth/Registration';
import Login from '@components/auth/login';
import NotFound from '@pages/NotFound';
import Authenticated from '@routes/Authenticated';
import AuthenticatedRoutes from '@routes/AuthenticatedRoutes';


const AppRoutes = () => {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/404' element={<NotFound />} />
				<Route
					path='*'
					element={
						<Authenticated>
							<AuthenticatedRoutes />
						</Authenticated>
					}
				/>
			</Routes>
			
		</Suspense>
	);
};

export default AppRoutes;
