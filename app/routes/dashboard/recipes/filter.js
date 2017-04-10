import Ember from 'ember';

export default Ember.Route.extend({

  /**
   * model
   * @param  {Object} params
   */
  model : function(params){

    const filterType = params.filter_type;
    return {
      filterType : filterType
    };
  },

});
