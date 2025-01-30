function Content() {
    const content = [
        "AI is improving rapidly and can handle many mid-level coding tasks, reducing the need for some developers.",
        "However, companies still need human developers for critical thinking, architecture, and handling unpredictable challenges—AI is a tool, not a replacement (yet).",
    ]
    return (
        <>
            <section className="content">
                <ol>
                    {content.map((value, index) => <li key={index}>{value}</li>)}
                </ol>
            </section>
        </>
    )
}

export default Content;