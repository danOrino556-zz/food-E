import Ember from 'ember';

export default Ember.Service.extend({


  store : Ember.inject.service('store'),


  /**
   * @method login
   * @param {String} usename
   * @param {String} password
   */
  login : function(username, password){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify({
      //     username : username,
      //     password : password
      //   }),
      // }).then(
      //
      //   (data) => {
      //     resolve();
      //   },
      //
      //   (xhr) => {
      //     reject(xhr);
      //   });
      //
      //

      const store = this.get('store');
      const userRecord = store.createRecord('user');

      resolve(userRecord);
    });
  },


  /**
   * @method logout
   */
  logout : function(){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(),
      // }).then(
      //
      //   (data) => {
      //     resolve();
      //   },
      //
      //   (xhr) => {
      //     reject(xhr);
      //   });

      console.log('Logout Service Function Hit');
      resolve(true);
    });
  }
});
