import "./WhatWeDo.css";
import illustration1 from "../../../assets/illustration.svg";

const WhatWeDo = () => {
	return (
		<section className='whatwedo' id='whatwedo'>
			<h2 className='title'>What We Do</h2>
			<div className='container max-width'>
				<div className='left-content'>
					<p>What we do</p>
					<p>Getting To Know Us Better</p>
				</div>

				<div className='right-content'>
					<p className='semi-bold'>
						As the name suggests, AltSchool Africa is different from the traditional
						institutions. We are a school for individuals looking to gain technical
						skills and kickstart a career in Tech. AltSchool Africa takes a
						non-traditional approach to learning by teaching courses directly
						connected with the selected track.
					</p>
					<p className='semi-bold'>
						Our robust curriculum which combines theoretical knowledge with practical
						real world applications is guaranteed to transform anyone into a top
						Software Engineer within one year.
					</p>
					<p className='semi-bold'>
						You don't need prior knowledge or technical skills to participate in any
						of our programs. Our curriculum is designed to give you the perfect leg up
						when transitioning to a career in tech.
					</p>
				</div>
			</div>

			<div className='image-container'>
				<img src={illustration1} alt='what we do' />
			</div>
		</section>
	);
};

export default WhatWeDo;
