import Ember from 'ember';

export default Ember.Route.extend({

  ingredientSvc : Ember.inject.service('ingredient'),


  /**
   * @event model
   */
  model : function(){

    const ingredientSvc = this.get('ingredientSvc');
    return ingredientSvc.getIngredients().then(

      (ingredients)=>{
        return {
          recentIngredients : ingredients
        };
      });
  }
});
