import pool from '../../../src/config/db.js';

export default async function handler(req, res) {
    const { dettagli, indirizzo, tipologia } = req.body;

    let client;
    try {
        client = await pool.connect();
        const queryString = 'INSERT INTO interventi (dettagli, indirizzo, tipologia) VALUES ($1, $2, $3) RETURNING *';
        const values = [dettagli, indirizzo, tipologia];
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
