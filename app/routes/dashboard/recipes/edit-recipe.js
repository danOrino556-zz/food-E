import Ember from 'ember';

export default Ember.Route.extend({


  /**
   * model
   * @param  {Object} params
   */
  model : function(params){

    const recipeId = params.recipe_id;
    return this.store.peekRecord('recipe', recipeId);
  },


  actions : {


    /**
     * @method onBack
     */
    onBack(){
      this.transitionTo('dashboard.recipes');
    }
  }
});
