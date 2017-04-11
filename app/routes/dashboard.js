import Ember from 'ember';

export default Ember.Route.extend({


  identitySvc : Ember.inject.service('identity'),


  actions : {


    /**
     * @method logout
     */
    logout(){

      const identitySvc = this.get('identitySvc');
      identitySvc.logout().then(

        ()=>{
          this.transitionTo('login');
        },

        ()=>{
          console.warn('There was a problem logging out of the application');
        }
      )
    }
  }
});
