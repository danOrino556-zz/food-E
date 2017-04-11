import Ember from 'ember';

export default Ember.Component.extend({


  actions : {


    /**
     * @method onEditRecipe
     * @param  {Object} recipe
     */
    onEditRecipe(){
      this.sendAction('onEditRecipe', this.get('recipe'));
    },


    /**
     * @method onAddRecipe
     * @param  {Object} recipe
     */
    onAddRecipe(){

      this.sendAction('onAddRecipe', this.get('recipe'));
    },


    /**
     * @method onFavortieRecipe
     * @param  {Object} recipe
     */
    onFavoriteRecipe(){
      this.sendAction('onFavoriteRecipe', this.get('recipe'));
    },
  }
});
