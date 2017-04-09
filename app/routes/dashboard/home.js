import Ember from 'ember';

export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),


  /**
   * @event model
   */
  model : function(){

    const recipeSvc = this.get('recipeSvc');

    return recipeSvc.getRecipes().then(
      (recipes)=>{

        return {

          recentRecipes : recipes,

          recentIngredients : [1, 2, 3 ,4 ],
        };
      }
    );
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
