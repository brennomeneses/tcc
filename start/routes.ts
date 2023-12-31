/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('/companies', 'CompaniesController')
Route.resource('/projects', 'ProjectsController').middleware({
  '*': ['auth'],
})

Route.resource('/criteria', 'CriteriaController').middleware({
  '*': ['auth'],
})

Route.resource('/reunion', 'ReunionsController').middleware({
  '*': ['auth'],
})

Route.resource('/tasks', 'TasksController').middleware({
  '*': ['auth'],
})

Route.resource('/users', 'UsersController').middleware({
  index: ['auth'],
  create: ['auth'],
})
Route.post('/users/login', 'UsersController.login')
