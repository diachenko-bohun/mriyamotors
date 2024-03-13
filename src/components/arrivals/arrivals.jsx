import React from 'react';
import { useSelector } from 'react-redux';
import './arrivals.scss';
import FillButton from '../buttons/fillButton/fillButton';
import CarDescriptionCard from '../cards/carDescriptionCard/CarDescriptionCard';

function Arrivals() {
	const carsStore = useSelector(state => state.cars);

	return (
		<div className='arrivalsContainer' id='arrivals'>
			<h3 className='arrivalsTitle'>NEUZUGANG</h3>
			{/* <p className='arrivalsSubtitle space'>Gebrauchte fahrzeuge.</p> */}
			{carsStore?.list.map(item => {
				return <CarDescriptionCard key={item?.id} item={item} />;
			})}
			{/* <CarDescriptionCard item={carsStore?.list[0]} />
			<CarDescriptionCard item={carsStore?.list[1]} /> */}
			{/* <div className='arrivalsBtnWrapper'>
				<FillButton text={'VIEW ALL'} />
			</div> */}
		</div>
	);
}

export default Arrivals;
