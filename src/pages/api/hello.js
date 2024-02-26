// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Factory, Model, Server } from 'miragejs'
export default async function handler() {
  try {
    const response = await fetch('http://localhost:3333/posts')
    if (!response.ok) {
      throw new Error('Erro na Api')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Detectado erro', error)
  }
}
export function newServer() {
  const server = new Server({
    models: {
      task: Model,
    },
    factories: {
      task: Factory.extend({
        name() {
          // return `Polly ${i + 1}`
        },
      }),
    },
    seeds(server) {
      server.create('task')
      // server.createList('task', )
    },
    routes() {
      this.namespace = 'api'
      this.urlPrefix = 'http://api.poly.com.br'
      this.get(
        '/tasks',
        async (schema) => {
          return {
            tasks: (await schema.tasks.all()).models,
          }
        },
        { timing: 3000 },
      )
      this.post('/tasks', async (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return {
          task: (await schema.tasks.create({ name: data.task, url: data.url }))
            .attrs,
        }
      })
      this.post('/login', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody)
        if (username === 'user' && password === '1234') {
          return {
            token: 'seu-token-de-autenticacao-simulado',
          }
        } else {
          return new Response(401, {}, { message: 'Credenciais inválidas' })
        }
      })
    },
  })
  return server
}
