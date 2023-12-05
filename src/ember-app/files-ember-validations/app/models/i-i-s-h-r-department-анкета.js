import {
  defineNamespace,
  Model as АнкетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-анкета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетаMixin, {
});

defineNamespace(Model);

export default Model;
