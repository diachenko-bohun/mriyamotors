import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: 1,
			title: 'Merced-Benz GLE 250d AMG Line',
			year: 2016,
			price: '34,990',
			odometer: '150,000',
			features:
				'Totwinkel-Assistent\nAktiver Park-Assistent\n9G-DCT\nAMG Styling\netc',
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/gle070324/photo-1.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-2.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-3.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-4.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-5.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-6.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-7.png'),
				},
				{
					original: require('../assets/images/cars/gle070324/photo-8.png'),
				},
			],
		},
		{
			id: 2,
			title: 'Volkswagen Golf 7 GTI',
			year: 2015,
			price: '18,990',
			odometer: '103,500',
			features:
				'Tornadorot\n️Rückfahrkamera\nStandheizung\nKeyless Go\nPanorama-Ausstell-/Schiebedach\nBI Xenon-Scheinwerfer mit Kurvenlicht\nDSG 6-Gang DQ250\nAnhängerkupplung\nPDC vorne und hinten\nAmbiente\n etc.',
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/golf070324/photo-1.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-2.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-3.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-4.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-5.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-6.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-7.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-8.png'),
				},
				{
					original: require('../assets/images/cars/golf070324/photo-9.png'),
				},
			],
		},
		{
			id: 3,
			title: 'BMW 530e M-Paket',
			year: 2017,
			price: '26,990',
			odometer: '137500',
			features: `M-Paket\nM-SPORTPAKET\nM-SPORTFAHRWERK\nM-AERODYNAMIKPAKET\nM-LEDERLENKRAD\nM-DACHHIMMEL anthrazit\nVOLL-LED-Scheinwerfer\nSITZHEIZUNG vorne\nAMBIENTE BELEUCHTUNG\nSHADOW-LINE hochglanz\nNAVIGATIONSSYSTEM Professional\n8-Gang Automatik\netc.`,
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/530e070324/photo-1.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-2.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-3.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-4.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-5.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-6.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-7.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-8.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-9.jpeg'),
				},
				{
					original: require('../assets/images/cars/530e070324/photo-10.jpeg'),
				},
			],
		},
		{
			id: 4,
			title: 'Merced-Benz CLA200 AMG Lineа ',
			year: 2022,
			price: '29,990',
			odometer: '95,200',
			features: `Volldigitales Instrumenten-Display\nAktiver Spurhalte-Assistent\n8G-DCT\nVolldigitales Instrumenten-Display\nMULTIBEAM LED\nAMG Styling\nAmbientebeleuchtung\nSitzheizung für Fahrer und Beifahrer\netc.`,
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/cla070324/photo-1.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-2.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-3.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-4.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-5.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-6.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-7.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-8.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-9.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-10.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-11.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-12.jpeg'),
				},
				{
					original: require('../assets/images/cars/cla070324/photo-13.jpeg'),
				},
			],
		},
		{
			id: 5,
			title: 'Merced-Benz E220d AMG Line',
			year: 2017,
			price: '37,990',
			odometer: '107,500',
			features:
				'Totwinkel-Assistent\nAktiver Park-Assistent\n9G-DCT\nAMG Styling\netc',
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/eclass070324/photo-1.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-2.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-3.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-4.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-5.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-6.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-7.png'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-8.JPG'),
				},
				{
					original: require('../assets/images/cars/eclass070324/photo-9.JPG'),
				},
			],
		},
	],
	access: false,
};

export const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setAccess: (state, action) => {
			state.access = action.payload;
		},
	},
});

// this is for dispatch
export const { setAccess } = carsSlice.actions;

// this is for configureStore
export default carsSlice.reducer;
