import Ember from 'ember';

export default Ember.Route.extend({


  /**
   * event redirect
   * @param Object model
   * @param Object params
   */
  redirect: function(model, params){
    if(params.targetName === 'index'){
      this.transitionTo('login');
    }
  }
});
