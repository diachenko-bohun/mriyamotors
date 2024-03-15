import React, { useEffect } from 'react';
import './services.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='servicesContainer' id='services'>
			<h3 className='servicesTitle'>UNSERE LEISTUNGEN</h3>
			<h4 className='servicesSubtitle'>Mehr als ein Autohändler.</h4>
			<h4 className='servicesSubtitle space'>
				Beratung, Ankauf, Verkauf und Service zählen zu unseren Stärken. Und das
				ganze auch noch mit einer exklusiven, persönlichen Note.
			</h4>
			<div className='servicesWrapper'>
				<div
					className='servicesItem'
					data-aos='fade-right'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					<p className='servicesItem__title'>VERKAUF</p>
					<p className='servicesItem__text'>
						Sie sind auf der Suche nach einem besonderen Fahrzeug? Wir beraten
						Sie fair und transparent, bieten marktkonforme Preise und verstehen,
						dass unsere Kunden einen besonderen Anspruch mitbringen.
					</p>
				</div>
				<div
					className='servicesItem'
					data-aos='fade-left'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					<p className='servicesItem__title'>ANKAUF</p>
					<p className='servicesItem__text'>
						Sie wollen sich von Ihrem Fahrzeug trennen und sind sich sicher,
						dass Ihr Fahrzeug zu unserem Portfolio passt?
						<br />
						Wir sind ständig auf der Suche nach neuen Fahrzeugen und
						unterbreiten Ihnen gerne ein faires Angebot. Kontaktieren Sie uns.
					</p>
				</div>
				<div
					className='servicesItem'
					data-aos='fade-right'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					<p className='servicesItem__title'>Finanzierung</p>
					<p className='servicesItem__text'>
						Wir garantieren Ihnen ein unkompliziertes, zeitsparendes und
						individuell angepasstes Finanzierungsverfahren, das Ihren
						Bedürfnissen entspricht.
					</p>
				</div>
				<div
					className='servicesItem'
					data-aos='fade-left'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					<p className='servicesItem__title'>SUCHAUFTRÄGE</p>
					<p className='servicesItem__text'>
						Raritäten, seltene Fahrzeuge oder besondere Spezifikationen. Teilen
						Sie uns Ihren ganz besonderen Fahrzeugwunsch mit und wir machen uns
						auf die Suche nach Ihrem Traumauto. Unser starkes Netzwerk und
						unsere verlässlichen Partner helfen uns dabei.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
