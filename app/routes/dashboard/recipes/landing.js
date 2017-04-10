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
      recipeSvc.getRecipes()
    ];


    return Ember.RSVP.allSettled(recipePromises).then(

      (promises)=>{

        return {
          recentRecipes : promises.objectAt(0).value,
          favoriteRecipes : promises.objectAt(1).value,
          topRatedRecipes : promises.objectAt(2).value,
          suggestedRecipes : promises.objectAt(3).value
        };

      });
  },


  actions : {


    /**
     * @method onEditRecipe
     * @param  {Object} recipe
     */
    onEditRecipe(recipe){
      this.transitionTo('dashboard.recipes.edit-recipe', recipe.get('id'));
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
