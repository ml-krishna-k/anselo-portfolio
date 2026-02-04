import { Button } from '@/components/ui/Button';

export function ContactPage() {
    return (
        <div className="container max-w-2xl py-12">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Let's work together. Fill out the form below.
            </p>
            <form className="mt-8 space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background" placeholder="How can I help you?" />
                </div>
                <Button size="lg" className="w-full">Send Message</Button>
            </form>
        </div>
    );
}
