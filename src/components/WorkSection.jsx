
const jobs = [
	{
		company: "MidAmerican Energy Company",
		title: "Software Engineer Intern",
		date: "May 2025 - Present",
		description:
			"Designed and implemented an Azure-based solution to automate the ingestion of GIS shapefile data. Utilized Azure Storage and Azure Functions to trigger a .NET backend that parses and transforms shapefile data into a SQL-compatible format for spatial visualization on a map interface. Developed a dynamic front-end search bar using React, enabling users to query and display geospatial data seamlessly. Collaborated with cross-functional teams to ensure a cohesive user experience and optimize system performance.",
	},
	{
		company: "Iowa Department of Transportation",
		title: "Business Analyst Intern",
		date: "May 2024 - April 2025",
		description:
			"Collaborated with stakeholders from Finance, HR, and Warehouse Management to gather requirements and execute their IT needs. Used Workday databases to collect and analyze large datasets, providing insights to improve business processes. Experience with PowerShell scipting to automate data extraction and reporting tasks.",
	},
	{
		company: "University of Iowa ITS",
		title: "Student Network Technician",
		date: "January 2024 - May 2024",
		description:
			"Collected data on electrical, internet, and other physical network technologies around campus to assist with maintenance. Adjusted telecommunication systems to improve performance.",
	},
];

export const WorkSection = () => {
	return (
		<section id="work" className="py-24 px-4 relative bg-secondary/30 mt-25">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					My{" "}
					<span className="text-primary">Work</span> Timeline
				</h2>
				<div className="relative border-l-2 border-primary/30 ml-4">
					{jobs.map((job, idx) => (
						<div key={idx} className="mb-12 ml-6 group">
							<div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-primary/80 border-4 border-background group-hover:bg-primary transition-colors"></div>
							<div className="bg-card p-6 rounded-lg shadow-xs card-hover">
								<h3 className="text-xl font-semibold text-primary mb-1">
									{job.title}
								</h3>
								<div className="text-muted-foreground text-sm mb-2">
									{job.company} &bull; {job.date}
								</div>
								<p className="text-foreground text-base">
									{job.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};