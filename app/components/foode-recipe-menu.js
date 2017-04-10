import Ember from 'ember';

export default Ember.Component.extend({

  actions : {

    /**
     * @method onFilterRecipes
     * @param  {Object} recipe
     */
    onFilterRecipes(filterParam){
      this.sendAction('onFilterRecipes', filterParam);
    },
  }
});
