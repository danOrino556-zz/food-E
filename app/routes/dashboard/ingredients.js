import Ember from 'ember';

export default Ember.Route.extend({

  ingredientSvc : Ember.inject.service('ingredient'),


  /**
   * @event model
   */
  model : function(){

    return {
      
    }
  }
});
