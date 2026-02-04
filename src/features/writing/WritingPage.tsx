export function WritingPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold">Writing</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Thoughts, tutorials, and stories.
            </p>
            <div className="mt-8 space-y-4">
                {[1, 2].map((i) => (
                    <div key={i} className="rounded-lg border p-6">
                        <h2 className="text-2xl font-semibold">Article Title {i}</h2>
                        <p className="mt-2 text-muted-foreground">
                            A brief summary of the article content goes here...
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
