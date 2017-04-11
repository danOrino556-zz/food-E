import Ember from 'ember';

export default Ember.Route.extend({


  identitySvc : Ember.inject.service('identity'),


  /**
   * @event model
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
    onLogin(){


      const currentModel = this.currentModel || {};
      const username = currentModel.username;
      const password = currentModel.password;
      const identitySvc = this.get('identitySvc');


      identitySvc.login(username, password).then(

        ()=>{
          this.transitionTo('dashboard.home.landing');
        },

        ()=>{
          console.warn('There was a problem logging into the application');
        }
      );
    }
  }
});
