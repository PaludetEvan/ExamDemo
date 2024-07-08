import pool from '../../../src/config/db.js';

export default async function handler(req, res) {
    const { nome, cognome, disponibile, esperienza, specializzazione} = req.body;

    let client;
    try {
        client = await pool.connect();
        const queryString = 'INSERT INTO tecnici (nome, cognome, disponibile, esperienza, specializzazione) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [nome, cognome, disponibile, esperienza, specializzazione];
        const result = await client.query(queryString, values);

        res.status(200).json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error('Errore nel comunicare con il db', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        if (client) {
            client.release();
        }
    }
}
