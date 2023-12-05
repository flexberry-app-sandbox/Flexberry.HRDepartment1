import {
  defineNamespace,
  Model as ОтчетMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-отчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетMixin, {
});

defineNamespace(Model);

export default Model;
