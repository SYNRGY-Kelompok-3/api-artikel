## CRUD API Artikel

### GET

#### Get All

`[ENDPOINT] /v1/artikel/`

```url
[GET] http://localhost:9000/v1/artikel/
```

##### Response

```json
"status": 200,
"data":[
    {
        "id": "3576898273677312",
        "title": "Tempat Wisata Raja Ampat",
        "category": "Wisata",
        "content": "Lorem ipsum dolor sit amet",
        "image_url": "https://res.cloudinary.com/dqlnqil8f/image/upload/v1705598040/vxnjnbo33aqo0dtn4x12.jpg",
        "created_at": "2024-01-18T17:14:01.451Z",
        "updated_at": "2024-01-18T17:14:01.451Z"
    },
    {
        "id": "3576889423695872",
        "title": "Tempat Wisata Bali",
        "category": "Wisata",
        "content": "Lorem ipsum dolor sit amet",
        "image_url": "https://res.cloudinary.com/dqlnqil8f/image/upload/v1705598863/k62udlpx7gvqmwgg4wii.jpg",
        "created_at": "2024-01-18T16:04:38.377Z",
        "updated_at": "2024-01-18T17:27:44.062Z"
    }
]
```

#### Get By Id

`[ENDPOINT] /v1/artikel/:id`

```url
[GET] http://localhost:9000/v1/artikel/:id
```

##### Response

```json
"status": 200,
"data":
    {
        "id": "3576889423695872",
        "title": "Tempat Wisata Bali",
        "category": "Wisata",
        "content": "Lorem ipsum dolor sit amet",
        "image_url": "https://res.cloudinary.com/dqlnqil8f/image/upload/v1705598863/k62udlpx7gvqmwgg4wii.jpg",
        "created_at": "2024-01-18T16:04:38.377Z",
        "updated_at": "2024-01-18T17:27:44.062Z"
    }
```

###### If ID Not Found

```json
"status": 404,
"message": "Article not found!"
```

### POST

`[ENDPOINT] /v1/artikel/create`

```url
[POST] http://localhost:9000/v1/artikel/create
```

##### Request

```json
{
  "title": string,
  "category": string,
  "content": string,
  "image_url": string
}
```

##### Response

```json
"status": 201,
"data":
{
    "id": "3576888127655936",
    "title": "Tempat Wisata Lombok",
    "category": "Wisata",
    "content": "Lorem ipsum dolor sit amet",
    "image_url": "https://res.cloudinary.com/dqlnqil8f/image/upload/v1705598775/ef9j7vk0mot8tzsocofa.jpg",
    "created_at": "2024-01-18T15:52:52.554Z",
    "updated_at": "2024-01-18T17:26:16.732Z"
}
```

### PUT

`[ENDPOINT] /v1/artikel/update/:id`

```url
[PUT] http://localhost:9000/v1/artikel/update/:id
```

##### Request

```json
{
  "title": string,
  "category": string,
  "content": string,
  "image_url": string
}
```

##### Response

```json
"status": 201,
"data":
{
    "id": "3576888127655936",
    "title": "Tempat Wisata Lombok",
    "category": "Wisata",
    "content": "Lorem ipsum dolor sit amet",
    "image_url": "https://res.cloudinary.com/dqlnqil8f/image/upload/v1705598775/ef9j7vk0mot8tzsocofa.jpg",
    "created_at": "2024-01-18T15:52:52.554Z",
    "updated_at": "2024-01-18T17:26:16.732Z"
}
```

### DELETE

`[ENDPOINT] /v1/artikel/delete/:id`

```url
[DELETE] http://localhost:9000/v1/artikel/delete/:id
```

##### Response

```json
"status": 201,
"message": "Successfully delete article!"
```

###### If ID Not Found

```json
"status": 404,
"message": "Article not found!"
```
