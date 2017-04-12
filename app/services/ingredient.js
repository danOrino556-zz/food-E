import Ember from 'ember';

export default Ember.Service.extend({


  /**
   * @method getRecipeIngredients
   */
  getRecipeIngredients : function(recipe){

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

      console.log('Hit GET ingredients for ' + recipe.get('name'));
      resolve(true);
    });
  },


  /**
   * @method getIngredients
   */
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


      console.log('Hit GET ingredients');
      resolve(true);
    });
  },


  /**
   * @method addIngredient
   */
  addIngredient : function(ingredient){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(ingredient),
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

      console.log('Hit POST ingredients');
      resolve(true);
    });
  },


  editIngredient : function(ingredient){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(ingredient),
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

      console.log('Hit EDIT ingredient');
      resolve(true);
    });
  },
});
