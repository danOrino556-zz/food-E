import Ember from 'ember';

export default Ember.Route.extend({


  /**
   * event model
   */
  model : function(){

    return {
      username : '',
      password : '',
    };
  },


  actions : {

    /**
     * @method login
     * @param {String} username
     * @param {String} password
     */
    onLogin(username, password){
      this.transitionTo('dashboard.home.landing');
    }
  }
});
