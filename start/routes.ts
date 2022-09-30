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


// API Auth

// API routes
Route.group(()=>{
  Route.post('login', async ({auth, request, response})=>{
    const {email,password} = JSON.parse(request.body())
    console.log(email)
    console.log(password)

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  })
  Route.group(() => {
    Route.resource('tasks', 'TasksController')
  }).middleware('auth')
}).prefix('/api')

