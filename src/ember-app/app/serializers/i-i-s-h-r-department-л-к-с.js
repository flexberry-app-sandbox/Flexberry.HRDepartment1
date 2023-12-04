import { Serializer as ЛКСSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-department-л-к-с';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЛКСSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
