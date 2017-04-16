import Ember from 'ember';

export default Ember.Route.extend({

  navSvc : Ember.inject.service('navigation'),
  notificationSvc : Ember.inject.service('notification'),


  /**
   * @event afterModel
   */
  afterModel : function(){
    this.set('navSvc.selectedNavItem', 'shop');
  },
});
