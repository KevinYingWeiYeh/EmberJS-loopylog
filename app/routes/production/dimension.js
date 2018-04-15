import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		// return Ember.$.getJSON(`/data/production.json`...).then(...)
		return this.modelFor(`production`)
			.findBy(`DimensionID`, Number(params.dimension_id));
	}
});
