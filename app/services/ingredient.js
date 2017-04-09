import Ember from 'ember';

export default Ember.Service.extend({


  getRecipeIngredients : function(){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(permissionList),
      }).then(

        (data) => {
          resolve();
        },

        (xhr) => {
          reject(xhr);
        });
    });
  },



  getIngredients : function(){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "GET",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(permissionList),
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


      resolve([1,2,3,4]);
    });
  },


  addIngredient : function(ingredient){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(ingredient),
      }).then(

        (data) => {
          resolve();
        },

        (xhr) => {
          reject(xhr);
        });
    });
  },


  editIngredient : function(ingredient){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(ingredient),
      }).then(

        (data) => {
          resolve();
        },

        (xhr) => {
          reject(xhr);
        });
    });
  },
});
