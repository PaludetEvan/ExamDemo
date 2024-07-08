import pool from '../../../src/config/db.js'

export default async function Handler (req,res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            let client = await pool.connect()
            const result = await client.query('SELECT * FROM tecnici WHERE id = $1', [id])
            
            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Elemento non trovato' });
            } else {
                res.status(200).json(result.rows)
            }
        } catch (error) {
            console.error('errore nella comunicazione con il db : ' ,error)
            res.status(500).json({ error: 'Errore interno del server' });

        } finally {
            if (client) client.release();
        }
    }
}