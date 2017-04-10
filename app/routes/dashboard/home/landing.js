import Ember from 'ember';

export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),


  /**
   * @event model
   */
  model : function(){

    const recipeSvc = this.get('recipeSvc');

    const recipePromises = [
      recipeSvc.getRecipes(),
      recipeSvc.getRecipes(),
      recipeSvc.getRecipes(),
      recipeSvc.getRecipes(),
      recipeSvc.getRecipes(),
      recipeSvc.getRecipes()
    ];


    return Ember.RSVP.allSettled(recipePromises).then(

      (promises)=>{

        return {
          breakfastRecipes : promises.objectAt(0).value,
          lunchRecipes : promises.objectAt(1).value,
          recentRecipes : promises.objectAt(2).value,
          favoriteRecipes : promises.objectAt(3).value,
          topRatedRecipes : promises.objectAt(4).value,
          suggestedRecipes : promises.objectAt(5).value
        };
      });
  },


  actions : {

    /**
     * @method onEditRecipe
     * @param  {Object} recipe
     */
    onEditRecipe(recipe){
      this.transitionTo('dashboard.home.edit-recipe', recipe.get('id'));
    },


    /**
     * @method onAddRecipe
     * @param  {Object} recipe
     */
    onAddRecipe(recipe){

      const recipeSvc = this.get('recipeSvc');
      recipeSvc.addRecipe(recipe);
    },


    /**
     * @method onFavortieRecipe
     * @param  {Object} recipe
     */
    onFavoriteRecipe(recipe){
      const recipeSvc = this.get('recipeSvc');
      recipeSvc.favoriteRecipe(recipe);
    },
  }
});
