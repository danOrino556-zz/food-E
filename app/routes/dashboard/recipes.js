import Ember from 'ember';

export default Ember.Route.extend({


  navSvc : Ember.inject.service('navigation'),
  notificationSvc : Ember.inject.service('notification'),


  /**
   * @event model
   */
  model : function(){

    const navSvc = this.get('navSvc');
    const notificationSvc = this.get('notificationSvc');

    return navSvc.getRecipeFilters().then(

      (recipeFilters)=>{

        return {
          recipeFilters : recipeFilters
        }
      },

      ()=>{
        notificationSvc.error('There was a problem retrieving the recipe filter list');
      }
    );
  },


  /**
   * @event afterModel
   */
  afterModel : function(){
    this.set('navSvc.selectedNavItem', 'recipes');
  },


  actions : {


    /**
     * @method onFilterRecipes
     * @param  {Object} recipe
     */
    onFilterRecipes(filterParam){
      this.transitionTo('dashboard.recipes.filter', filterParam);
    },
  }
});
