export default function(){

  //Route Transitions
  this.transition(
    this.fromRoute('dashboard.home'),
    this.toRoute('dashboard.recipes'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.home'),
    this.toRoute('dashboard.ingredients'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.home'),
    this.toRoute('dashboard.meal-planner'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.home'),
    this.toRoute('dashboard.shop'),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.fromRoute('dashboard.recipes'),
    this.toRoute('dashboard.ingredients'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.recipes'),
    this.toRoute('dashboard.meal-planner'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.recipes'),
    this.toRoute('dashboard.shop'),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.fromRoute('dashboard.ingredients'),
    this.toRoute('dashboard.meal-planner'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.ingredients'),
    this.toRoute('dashboard.shop'),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.fromRoute('dashboard.meal-planner'),
    this.toRoute('dashboard.shop'),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.toRoute('dashboard.profile'),
    this.use('toDown')
  );

  this.transition(
    this.fromRoute('dashboard.profile'),
    this.use('toUp')
  );

  this.transition(
    this.toRoute('login'),
    this.use('toDown')
  );

  this.transition(
    this.fromRoute('login'),
    this.use('toUp')
  );

}
