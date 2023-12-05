import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ДолжностьMixin
} from '../mixins/regenerated/models/i-i-s-h-r-department-должность';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДолжностьMixin, Validations, {
});

export default Model;
