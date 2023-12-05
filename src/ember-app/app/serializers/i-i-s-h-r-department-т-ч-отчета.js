import { Serializer as ТЧ_отчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-department-т-ч-отчета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧ_отчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
