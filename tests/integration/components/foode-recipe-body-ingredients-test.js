import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-body-ingredients', 'Integration | Component | foode recipe body ingredients', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-body-ingredients}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-body-ingredients}}
      template block text
    {{/foode-recipe-body-ingredients}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
