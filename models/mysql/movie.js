import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()
      // Get genre ids from database table using genre names
      const [genres] = await connection.query(
        `SELECT id, name
        FROM genre
        WHERE LOWER(name) = ?;`,
        [lowerCaseGenre]
      )

      // If genre not found, return empty array
      if (genres.length === 0) {
        return []
      }

      // Get id from first genre found
      // const [{ id }] = genres

      // Get movie data from movie table using movieIDs using JOIN
      return []
    }
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
      FROM movie;`
    )

    return movies
  }

  static async getById ({ id }) {
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
      FROM movie
      WHERE id = UUID_TO_BIN(?);`,
      [id]
    )

    if (movies.length === 0) {
      return null
    }

    return movies[0]
  }

  static async create ({ input }) {}

  static async delete ({ id }) {}

  static async update ({ id, input }) {}
}
