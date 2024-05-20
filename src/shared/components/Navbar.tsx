
import {  Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { useDispatch} from 'react-redux';
import { TAppDispatch } from '@models/redux.store';
import { logOutAction } from '@store/auth/auth-slice';

const NavbarData = () => {
	const navigate = useNavigate()
	const dispatch: TAppDispatch = useDispatch()
	return (
		<section>
		<div className='custom-tabs nav-tabs main-tabs' style={{ background: "white" }}>
			<div className='d-flex align-items-center justify-content-between'>
				<h1 style={{ marginLeft: "15px", fontSize: "1.5rem" }}>Demo</h1>
				<div className='d-flex align-items-center'>
					<Nav className="d-none d-lg-flex">
					
							<Nav.Item>
								<Nav.Link onClick={() => { dispatch(logOutAction()); navigate("/"); }}>Sign Out</Nav.Link>
							</Nav.Item>
						
					</Nav>
	
					
				</div>
			</div>
		</div>
		</section>
	
	
	);
};

export default NavbarData;
