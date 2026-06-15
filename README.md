# API RESTfull

## Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "name": "Producto 1",
  "price": 100
}
```

response:

```json
{
  "id": 1,
  "name": "Producto 1",
  "price": 100
}
```

status: 201

## Error Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "name": "Producto 1"
}
```

response:

```json
{
  "error": "El campo price es requerido"
}
```

status: 422
