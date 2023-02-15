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

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/', 'CatalogController.index')
}).prefix('/catalog');

Route.group(() => {
  Route.get('/', 'CommandsController.index')
  Route.get('/pending', 'CommandsController.pendingIndex')
  Route.post('/', 'CommandsController.store')
  Route.post('/validate/:id', 'CommandsController.validate')
}).prefix('/commands');

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.get('/me', 'AuthController.me')
}).prefix('/auth');

Route.group(() => {
  Route.group(() => {
    Route.post('/', 'IngredientsController.store')
    Route.put('/:id', 'IngredientsController.update')
    Route.delete('/:id', 'IngredientsController.destroy')
  }).prefix('/ingredients');

  Route.group(() => {
    Route.post('/', 'ProductsController.store')
    Route.put('/:id', 'ProductsController.update')
    Route.delete('/:id', 'ProductsController.destroy')
  }).prefix('/products');
}).prefix('/admin');
