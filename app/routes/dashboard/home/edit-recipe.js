import Ember from 'ember';


export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),


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
      this.transitionTo('dashboard.home.landing');
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

      recipeSvc.addRecipe(recipe).then(

        ()=>{

        },

        ()=>{
          console.warn('There was an error adding ' + recipe.get('name'));
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
