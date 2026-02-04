import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProvider } from './providers';

export function App() {
    return (
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    );
}
