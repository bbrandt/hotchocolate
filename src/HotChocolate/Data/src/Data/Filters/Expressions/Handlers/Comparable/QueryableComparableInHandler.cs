using System;
using System.Linq.Expressions;
using HotChocolate.Language;
using HotChocolate.Types;
using HotChocolate.Utilities;

namespace HotChocolate.Data.Filters.Expressions
{
    public class QueryableComparableInHandler
        : QueryableComparableOperationHandler
    {
        public QueryableComparableInHandler(
            ITypeConverter typeConverter)
            : base(typeConverter)
        {
        }

        protected override int Operation => Operations.In;

        public override Expression HandleOperation(
            QueryableFilterContext context,
            IFilterInputType declaringType,
            IFilterOperationField field,
            IType fieldType,
            IValueNode value,
            object parsedValue)
        {
            Expression property = context.GetInstance();
            parsedValue = ParseValue(value, parsedValue, fieldType, context);
            if (context.TryGetDeclaringField(out IFilterField? parentField))
            {
                return FilterExpressionBuilder.In(
                        property,
                        parentField.GetReturnType(),
                        parsedValue);
            }
            throw new InvalidOperationException();
        }
    }
}
