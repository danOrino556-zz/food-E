import Ember from 'ember';

export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),
  notificationSvc : Ember.inject.service('notification'),


  /**
   * model
   * @param  {Object} params
   */
  model : function(params){

    const recipeId = params.recipe_id;
    const recipes = this.store.peekAll('recipe');
    const record = recipes.findBy('id', recipeId) || this.store.createRecord('recipe');
    return {
      recipe : record
    };
  },


  actions : {


    /**
     * @method onBack
     */
    onBack(){
      this.transitionTo('dashboard.recipes.landing');
    },


    /**
     * @method onBack
     */
    onFavorite(recipe){

      const recipeSvc = this.get('recipeSvc');
      recipeSvc.favoriteRecipe(recipe);
    },


    /**
     * @method onAdd
     */
    onAdd(recipe){

      const recipeSvc = this.get('recipeSvc');
      const notificationSvc = this.get('notificationSvc');

      recipeSvc.addRecipe(recipe).then(

        ()=>{
          notificationSvc.success(recipe.get('name') + ' has been added to your recipe list');
        },

        ()=>{
          notificationSvc.error('There was a problem adding ' + recipe.get('name') + ' to your recipe list');
        });
    },


    /**
     * @method onOptions
     */
    onOptions(recipe){
      console.log(recipe);
    }
  }
});
