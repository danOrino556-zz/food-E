import Ember from 'ember';

export default Ember.Service.extend({


  /**
   * @method error
   */
  success : function(successMessage){
    console.log(successMessage);
  },


  /**
   * @method error
   */
  error : function(errorMessage){
    console.error(errorMessage);
  }
});
