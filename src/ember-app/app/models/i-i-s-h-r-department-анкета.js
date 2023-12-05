import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as АнкетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-анкета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетаMixin, Validations, {
});

export default Model;
