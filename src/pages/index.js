import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Heading from '../components/heading';
import Service from '../components/service';
import Slider from '../components/slider';

import heroImg from '../images/hero.png';
import slide1Img from '../images/slide-1.jpg';
import TennisIcon from '../assets/tennis.svg';
import RobotIcon from '../assets/robot.svg';
import MemberIcon from '../assets/member.svg';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>City	Table Tennis &mdash; Home</title>
			</Helmet>

			<Layout>
				<header className='grid grid-cols-2 gap-x-20 px-12 min-h-screen'>
					<div className='flex flex-col justify-center items-start space-y-8'>
						<h1 className='text-6xl block mt-2 font-semibold text-primary capitalize'>
							city table tennis
						</h1>

						<p className='w-2/3 leading-relaxed text-gray-600'>
							Build your career in this exciting game today OR just pick up a raquet and commit yourself to a fitter YOU!
						</p>

						<Link to='/apply' className='bg-primary px-12 py-4 rounded-full text-white transition-colors hover:bg-blue-700'>Apply Now</Link>
					</div>

					<div>
						<img src={heroImg} alt='HERO' className='h-full object-contain' />
					</div>
				</header>

				<main>
					<section className='pb-32'>
						<div className='text-center mb-12'>
							<h2 className='inline-block text-primary text-3xl relative after:absolute after:w-24 after:h-1 after:-left-32 after:bg-primary after:top-1/2 after:translate-y-1/2 before:absolute before:w-24 before:h-1 before:-right-32 before:bg-primary before:top-1/2 before:translate-y-1/2'>Benefits of table tennis</h2>
						</div>

						<ul className='text-center space-y-5 text-gray-600'>
							<li>Excellent Brain Workout &mdash; Enhance brain action within 10 Minutes.</li>
							<li>Socialization &mdash; A great way to play and exercise with friends and peers.</li>
							<li>Coordination &and; Agility &mdash; Exceptional for Hand-Eye Coordination and improving quickness.</li>
							<li>Promote Healthy Heart &mdash; It is a form of Cardio-Workout with gradual increase in Heart Rate.</li>
							<li>No Time Restraint &mdash; Can be played at any time of the day in all seasons.</li>
							<li>Overall Fitness &mdash; Enhance all aspect of fitness including Physical, Mental and Psychological.</li>
							<li>For Everyone No Criteria of age or minimum fitness for getting started.</li>
						</ul>
					</section>

					<section className='px-20 pb-40' id='section-services'>
						<div className='text-center'>
							<Heading>Services that we offer</Heading>
						</div>

						<div className='grid grid-cols-3 gap-12 mt-20'>
							<Service icon={TennisIcon} title='training' description='Group and Individual Coaching lessons for Beginners / Intermediate / Advance Players' />
							<Service icon={RobotIcon} title='table tennis robot' description='Unique facility of table tennis robot for improving skill and proficiency' />
							<Service icon={MemberIcon} title='membership' description='Monthly / Quaterly / Yearly memberships at quite lower prices' />
						</div>
					</section>

					<section className='px-10 py-16 bg-gray-100'>
						<div className='text-center mb-20'>
							<Heading>Have a look</Heading>
						</div>

						<div className='h-[30rem] rounded-xl overflow-hidden'>
							<Slider>
								<img className='h-full w-full object-cover object-top' src={slide1Img} alt='SLIDE 1' />
								<img className='h-full w-full object-cover object-top' src={slide1Img} alt='SLIDE 2' />
								<img className='h-full w-full object-cover object-top' src={slide1Img} alt='SLIDE 3' />
							</Slider>
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
};

export default IndexPage;