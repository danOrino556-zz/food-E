import Ember from 'ember';

export default Ember.Route.extend({





  redirect: function(model, params){
    if(params.targetName === 'index'){
      this.transitionTo('login');
    }
  }

});
