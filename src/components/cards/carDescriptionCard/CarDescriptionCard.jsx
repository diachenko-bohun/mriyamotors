import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import './carDescriptionCard.scss';
import FillButton from '../../buttons/fillButton/fillButton';

function CarDescriptionCard({ item }) {
	return (
		<div className='carDescriptionContainer'>
			<div className='carDescriptionCol'>
				<div className='carDescriptionTextHead'>
					<h3 className='carDescriptionTextHead__title'>{item?.title}</h3>
					<div className='carDescriptionTextHead__inner'>
						<p className='carDescriptionTextHead__year'>{item?.year}</p>
						<p className='carDescriptionTextHead__price'>{item?.price}€</p>
					</div>
				</div>
				<div className='carDescriptionTextBody'>
					<div className='carDescriptionTextBody__inner'>
						<p className='carDescriptionTextBody__cellLabel'>Kilometerstand:</p>
						<p className='carDescriptionTextBody__cellText'>
							{item?.odometer} km
						</p>
					</div>
					<div className='carDescriptionTextBody__inner'>
						<p className='carDescriptionTextBody__cellLabel'>Leistung:</p>
						<p className='carDescriptionTextBody__cellText'>{item?.ps} PS</p>
					</div>
					<div className='carDescriptionTextBody__inner'>
						<p className='carDescriptionTextBody__cellLabel'>Ausstattung:</p>
						<p className='carDescriptionTextBody__cellText'>{item?.features}</p>
					</div>
					<div className='carDescriptionTextBody__inner'>
						<p className='carDescriptionTextBody__text'>Jetzt anfragen:</p>
						<a
							className='carDescriptionTextBody__link'
							href='tel:+43 665 65936411'
						>
							+43 665 65936411
						</a>
					</div>
				</div>
			</div>
			<div className='carDescriptionCol'>
				<ImageGallery
					items={item?.imgs}
					showThumbnails={false}
					showPlayButton={false}
				/>
			</div>
		</div>
	);
}

export default CarDescriptionCard;
