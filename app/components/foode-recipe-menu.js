import Ember from 'ember';

export default Ember.Component.extend({


  navSvc : Ember.inject.service('navigation'),


  /**
   * @method categories
   * @type Array
   */
  categories : Ember.computed('recipeFilers.[]', function(){

    const categories = [];
    const recipeFilters = this.get('recipeFilters') || [];

    const categoryNames = Object.keys(recipeFilters) || [];

    categoryNames.forEach((categoryName)=>{

      const filters = recipeFilters[categoryName] || [];

      categories.pushObject({
        name : categoryName,
        filters : filters
      })

    });

    return categories;
  }),


  actions : {

    /**
     * @method onFilterRecipes
     * @param  {Object} recipe
     */
    onFilterRecipes(filterParam){
      this.sendAction('onFilterRecipes', filterParam);
    },
  }
});
