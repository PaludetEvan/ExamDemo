import pool from '../../../src/config/db.js'

export default async function Handler (req, res) {
    const queryBuilder = `
        CREATE TABLE IF NOT EXISTS tecnici (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cognome VARCHAR(255) NOT NULL,
        disponibile BOOLEAN NOT NULL,
        esperienza VARCHAR(255) NOT NULL,
        specializzazione VARCHAR(255) NOT NULL
    );
    `
    try {
        let client =await pool.connect()
        await client.query(queryBuilder)
        const result = await client.query('SELECT * FROM tecnici');
        res.status(200).json(result.rows);

    } catch (error) {
        console.error('Errore nella creazione del db o nella query:', error);
        res.status(500).json({ error: 'Errore interno del server' });
    }
}