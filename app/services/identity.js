import Ember from 'ember';

export default Ember.Service.extend({

  login : function(userName, password){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
          username : username,
          password : password
        }),
      }).then(

        (data) => {
          resolve();
        },

        (xhr) => {
          reject(xhr);
        });
    });


    return true;
  },


  logout : function(){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(),
      }).then(

        (data) => {
          resolve();
        },

        (xhr) => {
          reject(xhr);
        });
    });
  }
});
