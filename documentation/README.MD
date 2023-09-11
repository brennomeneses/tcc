# Kokpit REST API Documentation

BaseURL: ``https://photoclub-03.azurewebsites.net/``

------------------------------------------

#### Creating a company
<details>
 <summary><code>POST</code> <code><b>/companies</b></code></summary>

##### Parameters
```json 
{
	"name": "company name",
	"bannerImage": "placeholder"
}
 ```


##### Responses

| http code     | content-type                      | response                                                            |
|---------------|-----------------------------------|---------------------------------------------------------------------|
| `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                
| `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Example cURL

```bash
  curl -X POST https://photoclub-03.azurewebsites.net/companies -H "Content-Type: >application/json" --data-binary @- <<DATA
{
	"name": "empresa teste",
	"bannerImage": "placeholder"
}
 ```

</details>

#### List all the companies

<details>
 <summary><code>GET</code> <code><b>/companies</b></code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON Objects  |

##### Example cURL

```bash
  curl -X GET https://photoclub-03.azurewebsites.net/companies 
 ```

</details>

---------------------

#### Login as User
<details>
 <summary><code>POST</code> <code><b>/users/login</b></code></summary>

##### Parameters
```json
{
	"email": "email@email.com",
	"password": "password"
}
```

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | JSON Object              |
> | `404`         | `text/plain;charset=UTF-8`      | `User not found`      |
>  | `401`         | `text/plain;charset=UTF-8`      | `Invalid credentials`      |
>  | `500` | `text/plain;charset=UTF-8` | `Internal Error` |

##### Example cURL

 ```bash
  curl -X POST https://photoclub-03.azurewebsites.net/users -H "Content-Type:
  application/json" --data-binary @- <<DATA
 {
	"email": "email@email.com",
	"name": "Complete Name",
	"role": "Gerente de Portfólio || Gerente de Projetos || Funcionário",
	"password": "password",
	"companyId": 0 
}
 ```

</details>

#### Create a user
<details>
 <summary><code>POST</code> <code><b>/users</b></code></summary>

##### Parameters
```json
{
	"email": "email@email.com",
	"name": "Complete Name",
	"role": "Gerente de Portfólio || Gerente de Projetos || Funcionário",
	"password": "password",
	"companyId": 0 
}
```

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `tapplication/json`        | JSON Object                                                       |
> | `400`         | `text/plain;charset=UTF-8`        | `Bad request`                            |

##### Example cURL

```bash
  curl -X POST https://photoclub-03.azurewebsites.net/users -H "Content-Type:
  application/json" --data-binary @- <<DATA
 {
	"email": "email@email.com",
	"name": "Complete Name",
	"role": "Gerente de Portfólio || Gerente de Projetos || Funcionário",
	"password": "password",
	"companyId": 0 
}
 ```

</details>
