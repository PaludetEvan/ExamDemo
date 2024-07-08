import pool from '../../../src/config/db.js'

export default async function Handler(req, res) {
    const queryBuilder = `
    CREATE TABLE IF NOT EXISTS interventi (
    id SERIAL PRIMARY KEY,
    dettagli VARCHAR(255) NOT NULL,
    tipologia VARCHAR(255) NOT NULL,
    indirizzo VARCHAR(255) NOT NULL
);
    `
    try {
        let client = await pool.connect();
        await client.query(queryBuilder)
        const result = await client.query('SELECT * FROM interventi')
        res.status(200).json(result.rows);



    } catch (error) {
        console.error('Errore nella comunicazione con il db:', error);
        res.status(500).json({ error: 'Errore interno del server' });
    }
}