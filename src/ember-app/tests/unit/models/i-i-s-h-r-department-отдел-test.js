import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-department-отдел', 'Unit | Model | i-i-s-h-r-department-отдел', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-r-department-л-к-с',
    'model:i-i-s-h-r-department-отдел',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
