const technologies = [
    {
        name: "Angular",
        logo:"/logos/angular.svg"
    },
    {
        name: "React",
        logo: "/logos/react.svg",
    },
    {
        name: "JavaScript",
        logo: "/logos/js.svg",
    },
    {
        name: "TypeScript",
        logo: "/logos/typescript.svg",
    },
    {
        name: "Node.js",
        logo: "/logos/nodejs.svg",
    },
    {
        name: "HTML",
        logo: "/logos/html.svg",
    },
    {
        name: "CSS",
        logo: "/logos/css.svg",
    },
    {
        name: "Git",
        logo: "/logos/git.svg",
    },
    {
        name: "GitHub",
        logo: "/logos/github.svg",
    },
    {
        name: "Figma",
        logo: "/logos/figma.svg",
    }
];

function TechMarquee() {
    return (
        <section className="tech-marquee">
            <div className="marquee-track">

                {technologies.map((technology, index) => (
                    <div className="tech-logo" key={index}>
                        <img
                            src={technology.logo}
                            alt={technology.name}
                        />
                    </div>
                ))}

                {technologies.map((technology, index) => (
                    <div className="tech-logo" key={`copy-${index}`}>
                        <img
                            src={technology.logo}
                            alt={technology.name}
                        />
                    </div>
                ))}

            </div>
        </section>
    );
}

export default TechMarquee;