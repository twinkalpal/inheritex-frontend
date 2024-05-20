
import { TRootState } from '@models/redux.store';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type AuthenticatedProps = {
	children: ReactNode;
};

const Authenticated = ({ children }: AuthenticatedProps) => {

	const auth = useSelector((state: TRootState) => ({
		authenticated: !!state.auth.token
	}));


	if (auth.authenticated) {
		return <>{children}</>;
	}

	// logout(true);
	return <Navigate replace to='/' />;
};

export default Authenticated;
