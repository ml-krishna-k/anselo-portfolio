import { Button } from '@/components/ui/Button';

export function ContactSection() {
    return (
        <section className="bg-neutral-900 py-24 text-center md:py-32">
            <div className="container max-w-2xl">
                <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Let's Create Together</h2>
                <p className="mb-10 text-lg text-neutral-400">
                    Available for freelance projects and long-term collaborations.
                    Tell me about your vision.
                </p>
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 px-8 py-6 text-lg">
                    Get in Touch
                </Button>
                <div className="mt-12 flex justify-center space-x-8 text-sm text-neutral-500">
                    <a href="#" className="hover:text-primary">Instagram</a>
                    <a href="#" className="hover:text-primary">Vimeo</a>
                    <a href="#" className="hover:text-primary">LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
