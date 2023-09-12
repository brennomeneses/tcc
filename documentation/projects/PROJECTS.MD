#  Get all projects
To create a new user and vinculate to a company.
**URL** : `/projects`
**Method** : `GET`
**Auth required** : YES

**Data example**
```json
{
	"name": "João das couves",
	"email":"asidasiodajidosa@gmail.com",
	"password": "umasenha",
	"role": "programador",
	"companyId": 1
}
```

##  Success Response

  

**Code** : `200 OK`
**Content example**
```json
{
	"email": "asidasiodajidosa@gmail.com",
	"name": "João das couves",
	"password": "$scrypt$n=16384,r=8,p=1$Ncvu1hWYYrswKxNpyOsKrA$xllF8aMCEj9zHg7mpGEXrSaniUboelpz0W1xwAsFgm4AVecl1QKBTd81dbvZ2ufZrxtPiLHeNefpqQlSDIuIaA",
	"role": "programador",
	"company_id": 1,
	"created_at": "2023-09-04T22:29:16.640-03:00",
	"updated_at": "2023-09-04T22:29:16.642-03:00",
	"id": 6
}
```
#  Login as User
Use this route to login as a User
**URL** : `/users/login`
**Method** : `POST`
**Auth required** : NO
**Data constraints**
```json

{
	"email":"[E-mail of the user]",
	"password": "[Password of the user]",
}

```
**Data example**
```json
{
	"email":"asidasiodajidosa@gmail.com",
	"password": "umasenha",
}
```

##  Success Response

  

**Code** : `200 OK`
**Content example**
```json
{
	"type": "bearer",
	"token": "Mw.z6Z6vrfhY1FmD8Ln5NEKU-xCS6P4qlRGoJLCwBSxn5CUxIGwQ0_BEyvRtVnZ"
}
```

#  List all users
Use this route to login as a User
**URL** : `/users`
**Method** : `GET`
**Auth required** : YES

##  Success Response

  

**Code** : `200 OK`
**Content example**
```json
[
	{
		"id": 2,
		"name": "Brenno Araujo",
		"email": "dasdasdasda@gmail.com",
		"password": "$scrypt$n=16384,r=8,p=1$wAzZAt5CO8II4sMrCUOe3A$YEQF+Cnu7wno3k5DmAZ4NUBkrU6rTR3qyP6OCXG4nK3cowpRSTy8Kr6iTaVQaRMy3W1E/wH0VWbuREw3LuBkbg",
		"role": "Programador",
		"company_id": 1,
		"created_at": "2023-09-03T22:30:45.186-03:00",
		"updated_at": "2023-09-03T22:30:45.186-03:00",
		"projects": [
			{
				"id": 9,
				"name": "teste projeto 1",
				"description": "Descrição do projeto aqui",
				"grade": "9",
				"created_at": "2023-09-04T01:41:41.178-03:00",
				"updated_at": "2023-09-04T01:41:41.178-03:00"
			}
		],
		"company": {
			"id": 1,
			"name": "empresa teste",
			"banner_image": "jpg",
			"created_at": "2023-09-01T20:40:34.440-03:00",
			"updated_at": "2023-09-01T20:40:34.448-03:00"
		}
	},
	{
		"id": 3,
		"name": "Brenno Araujo 2",
		"email": "dasdfgdfgdfgd@gmail.com",
		"password": "$scrypt$n=16384,r=8,p=1$o98FlOmTw/JceXOSTwMZIw$jtPgTQ6TTBQe3iOqOf806uuIHbLYMcp9eyQO5XA79U0MfXhba1JESz1r7sS/M+DIf9KChh1yUaHzyZne12hq6A",
		"role": "Programador",
		"company_id": 1,
		"created_at": "2023-09-03T23:25:50.517-03:00",
		"updated_at": "2023-09-03T23:25:50.517-03:00",
		"projects": [
			{
				"id": 9,
				"name": "teste projeto 1",
				"description": "Descrição do projeto aqui",
				"grade": "9",
				"created_at": "2023-09-04T01:41:41.178-03:00",
				"updated_at": "2023-09-04T01:41:41.178-03:00"
			}
		],
		"company": {
			"id": 1,
			"name": "empresa teste",
			"banner_image": "jpg",
			"created_at": "2023-09-01T20:40:34.440-03:00",
			"updated_at": "2023-09-01T20:40:34.448-03:00"
		}
	}
]
```

