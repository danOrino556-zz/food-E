import Ember from 'ember';

export default Ember.Component.extend({


  actions : {

    /**
     * @method onEditRecipe
     * @param  {Object} recipe
     */
    onEditRecipe(recipe){
      this.sendAction('onEditRecipe', recipe);
    },


    /**
     * @method onAddRecipe
     * @param  {Object} recipe
     */
    onAddRecipe(recipe){

      this.sendAction('onAddRecipe', recipe);
    },


    /**
     * @method onFavortieRecipe
     * @param  {Object} recipe
     */
    onFavoriteRecipe(recipe){
      this.sendAction('onFavoriteRecipe', recipe);
    },
  }
});
