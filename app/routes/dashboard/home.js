import Ember from 'ember';

export default Ember.Route.extend({


  navSvc : Ember.inject.service('navigation'),


  afterModel : function(){
    this.set('navSvc.selectedNavItem', 'home');
  }
});
