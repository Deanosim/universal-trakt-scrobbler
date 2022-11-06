import { Service } from '@models/Service';

export const CrunchyrollBetaService = new Service({
	id: 'crunchyroll-beta',
	name: 'Crunchyroll Beta',
	homePage: 'https://crunchyroll.com/',
	hostPatterns: ['*://*.crunchyroll.com/*'],
	hasScrobbler: false,
	hasSync: true,
	hasAutoSync: true,
});
