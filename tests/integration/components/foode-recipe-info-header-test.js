import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-info-header', 'Integration | Component | foode recipe info header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-info-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-info-header}}
      template block text
    {{/foode-recipe-info-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
