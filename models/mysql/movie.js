import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  passsword: '123',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {}

  static async getById ({ id }) {}

  static async create ({ input }) {}

  static async delete ({ id }) {}

  static async update ({ id, input }) {}
}
