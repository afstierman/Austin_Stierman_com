import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, Map, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            "service_ifnyn2s",
            "template_ef2ar49",
            formRef.current,
            "Mzhg48sQm7XfRdsK8"
        )
        .then(
            (result) => {
                toast({
                    title: "Message Sent",
                    description: "Thank you for reaching out! I'll get back to you soon.",
                    duration: 3000,
                });
                setIsSubmitting(false);
            },
            (error) => {
                toast({
                    title: "Error",
                    description: "There was an error sending your message. Please try again later.",
                    duration: 3000,
                });
                setIsSubmitting(false);
            }
        );
    };

    return (
        <section 
            id="contact" 
            className = "py-24 px-4 relative bg-secondary/30"
        >
            <div className = "container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className ="text-primary"> Touch </span> 
                </h2>


                <p className = "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    Feel free to reach out to me via email or connect with me on LinkedIn.
                </p>

                <div className ="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className = "text-2xl font-semibold mb-6 text-center mt-6"> Contact Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mt-10">
                            <div className = "flex flex-col items-center text-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Mail className = "h-6 w-6 text-primary"/>
                                </div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:Austin.Stierman@gmail.com" className = "text-muted-foreground hover:text-primary transition-colors">
                                    Austin.Stierman@gmail.com
                                </a>
                            </div>
                            <div className = "flex flex-col items-center text-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Phone className = "h-6 w-6 text-primary"/>
                                </div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+15158031881" className = "text-muted-foreground hover:text-primary transition-colors">
                                    +1 (515) 803-1881
                                </a>
                            </div>
                            <div className = "flex flex-col items-center text-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Map className = "h-6 w-6 text-primary"/>
                                </div>
                                <h4 className="font-medium"> Location </h4>
                                <span className = "text-muted-foreground hover:text-primary transition-colors">
                                    Des Moines, IA, USA
                                </span>
                            </div>
                            <div className = "flex flex-col items-center text-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Linkedin className = "h-6 w-6 text-primary"/>
                                </div>
                                <h4 className="font-medium"> Connect With Me </h4>
                                <a href="https://www.linkedin.com/in/austin-stierman-08a9822aa/" target="_blank" className = "text-muted-foreground hover:text-primary transition-colors">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        className = "bg-card p-8 rounded-lg shadow-xs"
                    >
                        <h3 className = "text-2xl font-semibold mb-6"> Send a Message </h3>

                        <form ref={formRef} className = "space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor = "name" className = "block text-sm font-medium mb-2"> Your Name </label>
                                <input type = "text" id="name" name="name" required 
                                       className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rin-primary"
                                       placeholder="Austin Stierman..."
                                />
                            </div>
                            <div>
                                <label htmlFor = "email" className = "block text-sm font-medium mb-2"> Your Email </label>
                                <input type = "email" id="email" name="email" required 
                                       className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rin-primary"
                                       placeholder="Austin.Stierman@gmail.com..."
                                />
                            </div>
                            <div>
                                <label htmlFor = "message" className = "block text-sm font-medium mb-2"> Your Message </label>
                                <textarea  id="message" name="message" required 
                                       className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rin-primary resize-none"
                                       placeholder="Hello! I'd like to talk about..."
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className = {cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>

        </section>
    )
};