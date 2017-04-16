import Ember from 'ember';

export default Ember.Route.extend({


  ingredientSvc : Ember.inject.service('ingredient'),
  navSvc : Ember.inject.service('navigation'),


  /**
   * @event model
   */
  model : function(){

    return {

    }
  },


  /**
   * @event afterModel
   */
  afterModel : function(){
    this.set('navSvc.selectedNavItem', 'groceries');
  }
});
