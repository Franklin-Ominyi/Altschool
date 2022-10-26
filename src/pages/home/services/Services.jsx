import "./Services.css";
const Services = () => {
	return (
		<section className='services'>
			<div className='container max-width'>
				<p className='main-title' style={{ textAlign: "center" }}>
					Our Services
				</p>

				<h2 className='title ' style={{ color: "rgb(1, 1, 34)" }}>
					What do you need?
				</h2>

				<div className='contents'>
					<div className='content'>
						{/* <i className='fa fa-phone fa-3x' aria-hidden='true'></i>
						<br /> */}
						<p className='sub-title'>Frontend Engineering</p>
						<p>
							Frontend Engineers are some of the most sought-after Software Engineers.
							This program is designed to provide you with in-depth knowledge on how to
							create functional websites by implementing web designs through the use of
							various programming languages. You will be exposed to best practices
							while executing projects with guidance from some of our faculty members
							comprised of top senior engineers.
						</p>
					</div>

					<div className='content'>
						{/* <i className='fa fa-phone fa-3x' aria-hidden='true'></i>
						<br /> */}
						<p className='sub-title'>Backend Engineering</p>
						<p>
							Backend engineering is an exciting career track. Like the name suggests,
							backend engineering deals with the part of a website or a software
							application that the users do not see or interact with. As a backend
							engineer, you are responsible for building the structure of a software
							application. In this program, you will learn how to program servers,
							client-side interfaces and design databases using the various programming
							languages.{" "}
						</p>
					</div>

					<div className='content'>
						{/* <i className='fa fa-phone fa-3x' aria-hidden='true'></i>
						<br /> */}
						<p className='sub-title'>Cloud Engineering</p>
						<p>
							Cloud Engineering combines software development and IT operations to
							build and maintain cloud infrastructure. Cloud Engineers are in high
							demand, as more companies continue to move critical business processes
							and applications to cloud infrastructures. In this program, you will gain
							hands-on experience with cloud platforms, understand how cloud resources
							are allocated and paid for and learn how to shorten the systems
							development life-cycle.
						</p>
					</div>

					<div className='content'>
						<p className='sub-title'>Data Engineering</p>
						<p>
							Data engineering deals with the ingestion, transformation, storage, and
							retrieval of data. It also, in some cases, deals with the deployment and
							productionisation of Machine Learning models. The data that data
							engineers handle is often used by others within the organization, such as
							data analysts, data scientists, and ML engineers.
						</p>
					</div>

					<div className='content'>
						<p className='sub-title'>Data Analysis</p>
						<p>
							Data Analysis is one of the highly sought after and lucrative tech
							skills. It is the process of systematically applying statistical and/or
							logical techniques to describe and illustrate, condense and recap, and
							evaluate data. To succeed in this program, you’ll need to have
							prerequisite knowledge of; Basic understanding of High school Mathematics
							and Basic computer literacy
						</p>
					</div>

					<div className='content'>
						<p className='sub-title'>Product Design</p>
						<p>
							Product designers are creative masterminds. This course will take you
							through the basic principles of designing products that address user
							needs and align with business goals. Product design involves the entire
							process of researching and identifying user problems, crafting a solution
							to address these deficiencies and validating this solution with the
							end-users
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
