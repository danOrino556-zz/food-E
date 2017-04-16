import Ember from 'ember';

export default Ember.Component.extend({


  navSvc : Ember.inject.service('navigation'),


  selectedNavItem : Ember.computed.alias('navSvc.selectedNavItem'),

  
});
