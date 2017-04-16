import Ember from 'ember';

export default Ember.Service.extend({


  selectedNavItem : null,

  selectedRecipeFilter : null,

  recipeFilters : [],


  /**
   * @method getRecipeFilters
   */
  getRecipeFilters : function(){

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


      const filters = {

        main : [
          {
            display : 'Current',
            id : 'current'
          },
          {
            display : 'Favorites',
            id : 'favorites'
          },
          {
            display : 'Previous',
            id : 'previous'
          },
        ],

        sub : [
          {
            display : 'Popular',
            id : 'popular'
          },
          {
            display : 'Breakfast',
            id : 'breakfast'
          },
          {
            display : 'Lunch',
            id : 'lunch'
          },
          {
            display : 'Dinner',
            id : 'dinner'
          },
          {
            display : 'Italian',
            id : 'italian'
          },
          {
            display : 'vegan',
            id : 'vegan'
          },
          {
            display : 'Mexican',
            id : 'mexican'
          },
          {
            display : 'Thai',
            id : 'thai'
          },
          {
            display : 'Chinese',
            id : 'chinese'
          },
          {
            display : 'Greek',
            id : 'greek'
          },
          {
            display : 'Japanses',
            id : 'japanese'
          },
          {
            display : 'Mongolian',
            id : 'mongolian'
          },
          {
            display : 'Tex-Mex',
            id : 'texmex'
          },
          {
            display : 'Meeeeat',
            id : 'meat'
          },
          {
            display : 'Ramen',
            id : 'ramen'
          },
          {
            display : 'Fruitarian',
            id : 'fruitarian'
          },
        ]
      }


      resolve(filters);
    });
  },


});
