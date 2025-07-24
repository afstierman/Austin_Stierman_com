import React, { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
  // Frontend Development
  { name: "UI/UX Design", level: 80, category: "frontend" },
  { name: "JavaScript/TypeScript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "TailWind", level: 70, category: "frontend" },

  // Backend & APIs
  { name: ".NET (C#)", level: 85, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "Azure Functions", level: 70, category: "backend" },
  { name: "API Integration (REST)", level: 70, category: "backend" },

  // Cloud & Infrastructure
  { name: "Git", level: 95, category: "cloud" },
  { name: "Azure DevOps", level: 85, category: "cloud" },
  { name: "Azure Storage", level: 80, category: "cloud" },
  { name: "GitLab", level: 75, category: "cloud" },

  // Programming Languages
  { name: "C#", level: 90, category: "languages" },
  { name: "Java", level: 90, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
  { name: "C", level: 75, category: "languages" },
  { name: "C++", level: 65, category: "languages" },
  { name: "x86 Assembly", level: 65, category: "languages" },
  { name: "PowerShell", level: 65, category: "languages" },

  // Data & Tools
  { name: "PL/SQL", level: 75, category: "tools" },
  { name: "Excel (Advanced)", level: 75, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Geospatial Data (Shapefiles)", level: 70, category: "tools" },
  { name: "Power BI", level: 60, category: "tools" },


];

const categories = ["all", "frontend", "backend", "cloud", "languages", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills =skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id ="skills" className = "py-24 px-4 relative bg-secondary/30">
            <div className = "container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className ="text-primary"> Skills </span>
                </h2>

                <div className = "flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key = {key} 
                            onClick = {() => setActiveCategory(category)}
                            className ={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className ="text-left mb-4">
                                <h3 className = "font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className ="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className = "text-right mt-1">
                                <span className ="text-sm muted-foreground">{skill.level}%</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}