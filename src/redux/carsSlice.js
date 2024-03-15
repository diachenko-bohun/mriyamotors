import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: 1,
			title: 'Mercedes-Benz GLE250d AMG Line',
			year: 2016,
			price: '34,990',
			odometer: '156,000',
			ps: '204',
			features:
				'AMG Line\n22 Zoll Felgen\nCarPlay\nAMG Lenkrad\nVerkehrszeichenerkennung\nTotwinkel-Assistent\nAktiver Park-Assistent\nAutom. Fahrspurerkennung\nAnhängerkupplung\n9-Gang Automatik\netc.',
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
				{
					original: require('../assets/images/cars/gle070324/photo-9.png'),
				},
			],
		},
		{
			id: 2,
			title: 'Volkswagen Golf 7 GTI Tornadorot',
			year: 2015,
			price: '18,990',
			odometer: '103,500',
			ps: '220',
			features:
				'BI Xenon-Scheinwerfer mit Kurvenlicht\nKeyless Go\nPanorama-Ausstell-/Schiebedach\nAmbientebeleuchtung\nRückfahrkamera\nStandheizung\nAnhängerkupplung\nDSG 6-Gang DQ250\netc.',
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
				{
					original: require('../assets/images/cars/golf070324/photo-10.png'),
				},
			],
		},
		{
			id: 3,
			title: 'BMW 530e M-Paket',
			year: 2017,
			price: '26,990',
			ps: '252',
			odometer: '137,500',
			features: `M-Paket\nLED-Scheinwerfer\nCarPlay\n360* Kamera\nVerkehrszeichenerkennung\nAktiver Park-Assistent\nDriving Assistant\nAmbientebeleuchtung\n8-Gang Automatik\netc.`,
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
				{
					original: require('../assets/images/cars/530e070324/photo-11.jpeg'),
				},
			],
		},
		{
			id: 4,
			title: 'Merced-Benz CLA200 AMG Line',
			year: 2022,
			price: '29,990',
			ps: '163',
			odometer: '95,200',
			features: `AMG Line\nMultibeam LED\nCarPlay\nVerkehrszeichenerkennung\nAktiver Park-Assistent\nAutom. Fahrspurerkennung\nVolldigitales Instrumenten-Display\nAmbientebeleuchtung\n8-Gang Automatik\netc.`,
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
			ps: '194',
			odometer: '107,500',
			features:
				'AMG Line\nCarPlay\n360* Kamera\nVerkehrszeichenerkennung\nAktiver Park-Assistent\nAutom. Fahrspurerkennung\nVolldigitales Instrumenten-Display\nAmbientebeleuchtung\n9-Gang Automatik\netc.',
			status: 'active',
			imgs: [
				{
					original: require('../assets/images/cars/eclass070324/photo-11.png'),
				},
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
