import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЛКСMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-л-к-с';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЛКСMixin, Validations, {
});

defineProjections(Model);

export default Model;
