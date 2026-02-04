import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/features/home/HomePage';
import { AboutPage } from '@/features/about/AboutPage';
import { WorkPage } from '@/features/work/WorkPage';
import { WritingPage } from '@/features/writing/WritingPage';
import { ContactPage } from '@/features/contact/ContactPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'work',
                element: <WorkPage />,
            },
            {
                path: 'writing',
                element: <WritingPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
]);
