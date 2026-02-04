import * as React from 'react';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <React.Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            {children}
        </React.Suspense>
    );
}
