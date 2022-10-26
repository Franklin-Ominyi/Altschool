import "./Footer.css";
import logo from "../../assets/logo2.svg";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='content'>
				<div className='flex'>
					<div className='left'>
						<p>
							<img src={logo} alt='logo' />
						</p>
						<div className='social-icons'>
							<a
								href='https://www.facebook.com/AltSchoolAfrica/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-2x fa-facebook'></i>
							</a>
							<a
								href='https://twitter.com/AltSchoolAfrica'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-2x fa-twitter'></i>
							</a>
							<a
								href='https://www.instagram.com/altschoolafrica/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-2x fa-instagram'></i>
							</a>
							<a
								href='https://www.linkedin.com/company/altschoolafrica'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-2x fa-linkedin'></i>
							</a>
						</div>
						<p
							dangerouslySetInnerHTML={{
								__html: `&copy;${new Date().getFullYear()} All Rights Reserved | Altschool Africa  `,
							}}
						></p>
					</div>
					<div className='right'>
						<div className='inner-left'>
							<a
								href='https://www.altschoolafrica.com/schools/engineering?track=frontend'
								target='_blank'
								rel='noreferrer'
							>
								Frontend Engineering
							</a>
							<a
								href='https://www.altschoolafrica.com/schools/engineering?track=backend'
								target='_blank'
								rel='noreferrer'
							>
								Backend Engineering
							</a>
							<a
								href='https://www.altschoolafrica.com/schools/engineering?track=cloud'
								target='_blank'
								rel='noreferrer'
							>
								Cloud Engineering
							</a>
							<a
								href='https://www.altschoolafrica.com/schools/product?track=design'
								target='_blank'
								rel='noreferrer'
							>
								Product Design
							</a>
							<a
								href='https://www.altschoolafrica.com/schools/product?track=marketing'
								target='_blank'
								rel='noreferrer'
							>
								Product Marketing
							</a>
						</div>

						<div className='inner-right'>
							<a
								href='https://www.altschoolafrica.com/story?track=frontend'
								target='_blank'
								rel='noreferrer'
							>
								Our Story
							</a>
							<a
								href='https://blog.altschoolafrica.com/?track='
								target='_blank'
								rel='noreferrer'
							>
								Blog
							</a>
							<a
								href='https://www.altschoolafrica.com/policy?track=frontend'
								target='_blank'
								rel='noreferrer'
							>
								Privacy policy
							</a>
							<a href='https://www.altschoolafrica.com/hire?track=frontend'>
								Hire our Grads
							</a>
							<a
								href='https://www.altschoolafrica.com/faqs?track=frontend'
								target='_blank'
								rel='noreferrer'
							>
								FAQ’s
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
