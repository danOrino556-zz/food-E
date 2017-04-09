import Ember from 'ember';

export default Ember.Component.extend({


  /**
   * @method fullStars
   * @type Array
   */
  fullStars : Ember.computed('recipe.stars', function(){

    const fullStars = [];
    const stars = this.get('recipe.stars');

    for(let i =0; i< stars; i++){
      fullStars.pushObject(i);
    }

    return fullStars;
  }),


  /**
   * @method halfStars
   * @type Array
   */
  emptyStars : Ember.computed('recipe.stars', function(){

    const emptyStars = [];
    const stars = this.get('recipe.stars');

    for(let i =0; i< (5 - stars); i++){
      emptyStars.pushObject(i);
    }

    return emptyStars;
  }),


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
