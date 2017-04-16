import Ember from 'ember';

export default Ember.Component.extend({


  actions : {


    /**
     * @method onEditRecipe
     * @param {Object} recipe
     */
    onEditRecipe(recipe){
      this.sendAction('onEditRecipe', recipe);
    }
  }
});
