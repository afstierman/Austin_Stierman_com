import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
{
        id: 1,
        title: "EV Trip Planner",
        description: "Built a web application that calculates optimal electric vehicle charging stops along a driving route. The backend, powered by FastAPI and PostgreSQL/PostGIS, integrates with the OSRM routing API to determine charger accessibility within EV range and along the destination path. Implemented efficient geospatial queries and stop-selection logic to handle edge cases like unreachable routes and direct reachability. The frontend, developed with React and Leaflet, provides an interactive map with dynamic markers for routes, chargers, and destinations.",
        image: "/projects/EVChargerService.png",
        tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "PostGIS", "React", "Leaflet"],
        githubURL: "https://github.com/afstierman/EV_Chargers_Service",
    },
    {
        id: 2,
        title: "Task Manager Mobile",
        description: "Developed a cross-platform mobile application that simplifies task and project management. The app enables users to create, update, and delete tasks, set deadline reminders, and stay organized with ease. The backend, built with Node.js and MongoDB, manages data persistence, while the React Native frontend (Expo Go) provides a smooth, native-like experience across both iOS and Android. Hosted on Render for reliable deployment and scalability, ensuring seamless synchronization of tasks across devices.",
        image: "/projects/TaskManager.png",
        tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "Render"],
        githubURL: "https://github.com/afstierman/TaskManagerMobile",
    },
    {
        id: 3,
        title: "Austin Stierman Portfolio Website",
        description: "This personal website, which you are currently viewing, was designed and developed to highlight my skills and showcase my projects in a clean, modern way. Built with React, TypeScript, and Tailwind CSS, it emphasizes responsive design and performance to ensure accessibility across devices. Beyond being a portfolio, it also serves as a central hub for my professional journey in software development, including links to my work, background, and ways to connect with me.",
        image: "/projects/PersonalWebsite.jpg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        githubURL: "https://github.com/afstierman/Austin_Stierman_com",
    }

]

export const ProjectsSection = () => {
    return (
        <section id = "projects" className = "py-24 px-4 relative">
            <div className = "container mx-auto max-w-5xl">
                <h2 className = "text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className = "text-primary"> Projects </span></h2>
            
                <p className = "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    These recent projects highlight my experience and the value I bring through innovative solutions.
                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className = "group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            
                            <div className = "h-48 overflow-hidden">
                                <img src={project.image}
                                    alt={project.title} 
                                    className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            
                            <div className = "p-6">
                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className = "px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"> 
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                                <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                                <p className ="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className = "flex justify-between items-center">
                                    <div className = "absolute bottom-0 left-0 flex space-x-3 p-4">
                                        <a  href={project.githubURL} 
                                            target = "_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >   
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a 
                        className ="cosmic-button w-fit flex items-center mx-auto gap-2"
                        targer = "_blank"
                        href="https://github.com/afstierman"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
};