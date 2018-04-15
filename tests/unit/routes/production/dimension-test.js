import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | production/dimension', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:production/dimension');
    assert.ok(route);
  });
});
