
module.exports = {
	event: 'rateLimit',
	execute(_client, log, [limit]) {
		log.warn('Rate-limited! (Enable debug mode in config for details)');
		log.debug(limit);
	}
};