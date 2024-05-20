import NavbarData from '@shared/components/Navbar';
import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

type DefaultLayoutProps = {
	children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<div>
			<div className='main-container'>
				<NavbarData></NavbarData>
				<div className='content'>
					<Container fluid>
						{children}
						
					</Container>
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
