import pool from '../../../src/config/db.js'

export default async function Handler(req, res) {
    const { intervento_id, operatore_id, data_intervento, ora_intervento } = req.body

    try {
        let client = await pool.connect();
        const query = ('INSERT INTO interventi_assegnati (intervento_id, operatore_id, data_intervento, ora_intervento) VALUES ($1,$2,$3,$4)')
        const values = [intervento_id, operatore_id, data_intervento, ora_intervento]

        const result = await client.query(query, values)
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