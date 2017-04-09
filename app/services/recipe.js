import Ember from 'ember';

export default Ember.Service.extend({

  store : Ember.inject.service('store'),

  getRecipes : function(){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "GET",
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
      //
      //
      //
      //
      //
      const store = this.get('store');


      resolve([
        store.createRecord('recipe', {
          name : 1
        }),
        store.createRecord('recipe', {
          name : 2
        }),
        store.createRecord('recipe', {
          name : 3
        }),
        store.createRecord('recipe', {
          name : 4
        }),
      ]);

    });
  },


  addRecipe : function(recipe){

    // return new Ember.RSVP.Promise((resolve, reject) => {
    //
    //   Ember.$.ajax({
    //     url: bobsUrl,
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json",
    //     data: JSON.stringify(recipe),
    //   }).then(
    //
    //     (data) => {
    //       resolve();
    //     },
    //
    //     (xhr) => {
    //       reject(xhr);
    //     });
    // });
    //
    console.log(recipe);
  },


  favoriteRecipe : function(recipe){

    // return new Ember.RSVP.Promise((resolve, reject) => {
    //
    //   Ember.$.ajax({
    //     url: bobsUrl,
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json",
    //     data: JSON.stringify(recipe),
    //   }).then(
    //
    //     (data) => {
    //       resolve();
    //     },
    //
    //     (xhr) => {
    //       reject(xhr);
    //     });
    // });
    //
    console.log(recipe);
  },


  editRecipe : function(recipe){

    return new Ember.RSVP.Promise((resolve, reject) => {

      Ember.$.ajax({
        url: bobsUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(recipe),
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
