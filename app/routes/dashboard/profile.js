import Ember from 'ember';

export default Ember.Route.extend({


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
    this.set('navSvc.selectedNavItem', 'profile');
  }
});
