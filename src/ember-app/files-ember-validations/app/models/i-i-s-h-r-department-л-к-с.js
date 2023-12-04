import {
  defineNamespace,
  defineProjections,
  Model as ЛКСMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-л-к-с';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЛКСMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
