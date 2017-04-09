import Ember from 'ember';

export default Ember.Route.extend({


  /**
   * model
   * @param  {Object} params
   */
  model : function(params){

    const recipeId = params.recipe_id;
    const recipes = this.store.peekAll('recipe');
    const record = recipes.findBy('id', recipeId);
    return {
      recipe : record
    };
  },


  actions : {


    /**
     * @method onBack
     */
    onBack(){
      this.transitionTo('dashboard.home');
    }
  }
});
