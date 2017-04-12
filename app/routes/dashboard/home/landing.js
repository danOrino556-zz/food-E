import Ember from 'ember';

export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),
  notificationSvc : Ember.inject.service('notification'),


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

    //Each of these arrays represents once category of recipes
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
      const notificationSvc = this.get('notificationSvc')

      recipeSvc.addRecipe(recipe).then(
        ()=>{
          notificationSvc.success(recipe.get('name') + ' has been added to your recipe list');
        },
        ()=>{
          notificationSvc.success('There was a problem adding ' + recipe.get('name') + ' to your recipe list');
        }
      );
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
