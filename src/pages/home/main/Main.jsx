import { Link } from "react-router-dom";
import illustration1 from "../../../assets/illustration.svg";
import "./Main.css";
const LandingPage = () => {
	return (
		<div className='main-content'>
			<main className='max-width'>
				<section className='landing-page'>
					<article className='texts-container'>
						<h2 className='bold' style={{ color: "rgb(1, 1, 34)" }}>
							Tech School for Africans
						</h2>
						<p className='semi-bold'>
							Learn the in-demand skills required to take you from beginner to industry
							ready in 12 months. No degree or prior tech experience required.
						</p>

						<div className='btn-container'>
							<a href='#whatwedo' className='smooth-scroll btn'>
								What we do
							</a>

							<Link to='/users' className='btn'>
								View Users
							</Link>
						</div>
					</article>

					<article className='landing-page-image'>
						<img src={illustration1} alt='illustration' />
					</article>
				</section>
			</main>
		</div>
	);
};

export default LandingPage;
