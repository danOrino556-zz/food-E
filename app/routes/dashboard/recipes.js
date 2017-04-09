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
          recentRecipes : recipes
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
  }
});
