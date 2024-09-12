# Brand_Only_TypeName

## SQL

```text
SELECT b."Id"
FROM "Brands" AS b
WHERE b."Id" = 1
```

## Result

```json
{
  "data": {
    "brandById": {
      "__typename": "Brand"
    }
  }
}
```
