import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-dashboard-nav', 'Integration | Component | foode dashboard nav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-dashboard-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-dashboard-nav}}
      template block text
    {{/foode-dashboard-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
