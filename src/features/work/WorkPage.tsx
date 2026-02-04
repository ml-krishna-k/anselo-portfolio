export function WorkPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold">My Work</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                A selection of my recent projects.
            </p>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Helper dummy items */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video rounded-lg border bg-muted p-4">
                        Project {i} Placeholder
                    </div>
                ))}
            </div>
        </div>
    );
}
