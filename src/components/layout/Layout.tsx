import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor, NoiseOverlay } from '@/components/ui/GlobalEffects';

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans antialiased cursor-none">
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />
            <main className="flex-1 pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
