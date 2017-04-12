import Ember from 'ember';

export default Ember.Service.extend({


  store : Ember.inject.service('store'),


  /**
   * @method getRecipes
   */
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

      const store = this.get('store');

      const records = [];

      for(let i = 0; i<15; i++){
        records.pushObject(
          store.createRecord('recipe', {
            id : this.createGUID()
          })
        )
      }

      resolve(records);
    });
  },


  /**
   * POSSIBLE TEMP METHOD
   * @method getRecipes
   */
  createGUID : function() {

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  },


  /**
   * @method addRecipe
   * @param {Object} recipe
   */
  addRecipe : function(recipe){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(recipe),
      // }).then(
      //
      //   (data) => {
      //     resolve();
      //   },
      //
      //   (xhr) => {
      //     reject(xhr);
      //   });

      console.log('Add recipe service hook');
      console.log(recipe);
      resolve(recipe);
    });
  },


  /**
   * @method favoriteRecipe
   * @param {Object} recipe
   */
  favoriteRecipe : function(recipe){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(recipe),
      // }).then(
      //
      //   (data) => {
      //     resolve();
      //   },
      //
      //   (xhr) => {
      //     reject(xhr);
      //   });

      recipe.toggleProperty('favorite');
      console.log('Favorite recipe service hook');
      console.log(recipe);
      resolve(recipe);
    });
  },


  /**
   * @method saveRecipe
   * @param {Object} recipe
   */
  saveRecipe : function(recipe){

    return new Ember.RSVP.Promise((resolve, reject) => {

      // Ember.$.ajax({
      //   url: bobsUrl,
      //   type: "POST",
      //   dataType: "json",
      //   contentType: "application/json",
      //   data: JSON.stringify(recipe),
      // }).then(
      //
      //   (data) => {
      //     resolve();
      //   },
      //
      //   (xhr) => {
      //     reject(xhr);
      //   });

      console.log('Save recipe service hook');
      console.log(recipe);
      resolve(recipe);
    });
  },
});
