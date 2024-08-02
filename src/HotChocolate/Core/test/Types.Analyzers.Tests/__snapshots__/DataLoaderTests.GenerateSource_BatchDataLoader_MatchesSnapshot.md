# GenerateSource_BatchDataLoader_MatchesSnapshot

## HotChocolateDataLoader.735550c.g.cs

```csharp
// <auto-generated/>

#nullable enable
#pragma warning disable

using System;
using System.Runtime.CompilerServices;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace TestNamespace
{
    public interface IEntityByIdDataLoader
        : global::GreenDonut.IDataLoader<int, Entity>
    {
    }

    public sealed class EntityByIdDataLoader
        : global::GreenDonut.BatchDataLoader<int, Entity>
        , IEntityByIdDataLoader
    {
        private readonly global::System.IServiceProvider _services;

        public EntityByIdDataLoader(
            global::System.IServiceProvider services,
            global::GreenDonut.IBatchScheduler batchScheduler,
            global::GreenDonut.DataLoaderOptions options)
            : base(batchScheduler, options)
        {
            _services = services ??
                throw new global::System.ArgumentNullException(nameof(services));
        }
        protected override async global::System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<int, Entity>> LoadBatchAsync(
            System.Collections.Generic.IReadOnlyList<int> keys,
            global::System.Threading.CancellationToken ct)
        {
            return await TestNamespace.TestClass.GetEntityByIdAsync(keys, ct).ConfigureAwait(false);
        }
    }

}


```

## HotChocolateMiddleware.735550c.g.cs

```csharp
// <auto-generated/>

#nullable enable
#pragma warning disable

using System;
using System.Runtime.CompilerServices;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HotChocolate.Execution.Generated
{
    public static class TestsTypesMiddlewareFactoriesHASH
    {
    }
}

#pragma warning disable CS9113 // Parameter is unread.
namespace System.Runtime.CompilerServices
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    file sealed class InterceptsLocationAttribute(string filePath, int line, int column) : Attribute;
}
#pragma warning restore CS9113 // Parameter is unread.
```

## HotChocolateResolvers.735550c.g.cs

```csharp
// <auto-generated/>

#nullable enable
#pragma warning disable

using System;
using System.Runtime.CompilerServices;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Execution.Configuration;
using HotChocolate.Internal;


```

## HotChocolateTypeModule.735550c.g.cs

```csharp
// <auto-generated/>

#nullable enable
#pragma warning disable

using System;
using System.Runtime.CompilerServices;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Execution.Configuration;

namespace Microsoft.Extensions.DependencyInjection
{
    public static partial class TestsTypesRequestExecutorBuilderExtensions
    {
        public static IRequestExecutorBuilder AddTestsTypes(this IRequestExecutorBuilder builder)
        {
            builder.AddDataLoader<global::TestNamespace.IEntityByIdDataLoader, global::TestNamespace.EntityByIdDataLoader>();
            return builder;
        }
    }
}

```

## HotChocolateTypes.735550c.g.cs

```csharp

```
