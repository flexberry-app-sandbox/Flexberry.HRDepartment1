import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧ_отчетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-т-ч-отчета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧ_отчетаMixin, Validations, {
});

export default Model;
