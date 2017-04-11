import Ember from 'ember';

export default Ember.Route.extend({


  actions : {


    /**
     * @method onFilterRecipes
     * @param  {Object} recipe
     */
    onFilterRecipes(filterParam){
      this.transitionTo('dashboard.recipes.filter', filterParam);
    },
  }
});
