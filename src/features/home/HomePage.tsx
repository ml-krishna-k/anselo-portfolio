import { useState, useEffect } from 'react';
import { LandingScreen } from './components/LandingScreen';
import { DynamicHero } from './components/DynamicHero';
import { ShowreelSection } from './components/ShowreelSection';
import { WorkGrid } from './components/WorkGrid';
import { VideoGrid } from './components/VideoGrid';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CertificatesSection } from './components/CertificatesSection';


export function HomePage() {
    const [isLandingComplete, setIsLandingComplete] = useState(false);

    useEffect(() => {
        // Lock scroll during landing animation
        if (!isLandingComplete) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLandingComplete]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* 
        Landing Screen is fixed on top. 
        It handles its own unmounting/fading or we can conditionally render it.
        We keep it rendered to allow the exit animation to finish.
      */}
            <LandingScreen onComplete={() => setIsLandingComplete(true)} />

            {/* 
        Main Content.
        Hidden initially or we can let the LandingScreen cover it. 
        We'll use opacity transition for a smooth reveal if needed, 
        but LandingScreen's fade out usually handles the reveal.
      */}
            <div
                className="transition-opacity duration-1000 opacity-100"
            >
                <DynamicHero />

                {/* Showreel - plays all 7 videos sequentially */}
                <ShowreelSection />

                {/* Content Card - Slides over the fixed Hero */}
                <div className="relative z-10 bg-background-secondary rounded-t-[3rem] shadow-2xl -mt-8 border-t border-white/5">
                    <div id="about" className="scroll-mt-24" />
                    <AboutSection />

                    <div id="work" className="scroll-mt-24" />
                    <WorkGrid />

                    {/* Video Grid - 3D video carousel */}
                    <VideoGrid />



                    <div id="services" className="scroll-mt-24" />
                    <ServicesSection />

                    <div id="certificates" className="scroll-mt-24" />
                    <CertificatesSection />


                </div>
            </div>
        </div>
    );
}

