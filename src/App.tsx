import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from '@routes/AppRoutes';

export const SidebarContext = createContext<{
	sidebar: boolean;
	setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	sidebar: false,
	setSidebar: () => {}
});

const App = () => {
	const [sidebar, setSidebar] = useState<boolean>(false);

	return (
		<SidebarContext.Provider value={{ sidebar, setSidebar }}>
			<Provider store={store}>
			<PersistGate persistor={persistor}>
			<div className='app'>
				<div className={`content-wrapper ${sidebar && 'mini-sidebar'}`}>
					<ToastContainer />
					<BrowserRouter>
					<AppRoutes />
					</BrowserRouter>
				</div>
			</div>
			</PersistGate>
			</Provider>
		</SidebarContext.Provider>
	);
};

export default App;
