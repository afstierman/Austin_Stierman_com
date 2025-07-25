import { School, Server, User } from "lucide-react";

export const AboutSection = () => {
    return(
    <section id = "about" className = "py-24 px-4 relative">
        <div className = "container mx-auto max-2-5xl">
            <h2 className = "text-3xl md:text-5xl font-bold mb-12 text-center">
                About <span className = "text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className ="space-y-6">
                    <h3 className = "text-2xl font-semibold">Driven Software Engineer and Student</h3>

                    <p className ="text-muted-foreground">
                        I am a dedicated software engineer with internship experiences related to full stack web application development and business process automation.
                        I am passionate about creating efficient and scalable solutions that enhance user experiences and streamline operations.
                    </p>

                    <p className ="text-muted-foreground">
                        As a student, I attend the University of Iowa, pursuing a degree in Computer Science. 
                        I have a 4.12 GPA and have been on the president's list every semester. I am involved with the UIOWA ACM chapter,
                         where I collaborate with peers on various projects and initiatives.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className ="cosmic-button">
                            Contact Me
                        </a>

                        <a
                        href="/AustinStiermanResume.pdf"
                        download
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                        Download Resume
                        </a>
                    </div>
                </div>
                
                <div className = "grid grid-cols-1 gap-6">
                    <div className = "gradient-border p-6 card-hover">
                        <div className = "flex items-start gap-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                                <Server className = "h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Development</h4>
                                <p className= "muted-foreground">
                                    I specialize in creating backend systems that are robust, scalable, and secure, using technologies like Azure, .NET, PL/SQL, and Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className = "gradient-border p-6 card-hover">
                        <div className = "flex items-start gap-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                                <User className = "h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Development</h4>
                                <p className="muted-foreground">
                                    I am experienced in creating intuitive and engaging user interfaces using modern frameworks like React and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <School className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">Academic Focus</h4>
                            <p className="muted-foreground">
                                In school, I have built a strong foundation in algorithms and data structures, and I am actively developing my expertise in operating systems and machine learning through coursework and personal projects.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}