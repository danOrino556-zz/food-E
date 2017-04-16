import Ember from 'ember';

export function equal(params/*, hash*/) {

  const leftSide = params.objectAt(0);
  const rightSide = params.objectAt(1);
  return leftSide === rightSide;
}

export default Ember.Helper.helper(equal);
