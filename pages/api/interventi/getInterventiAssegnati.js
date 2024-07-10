import pool from '../../../src/config/db.js'

export default async function Handler(req, res) {
    const querySelect = `
        SELECT 
        interventi_assegnati.id,
        interventi_assegnati.data_intervento,
        interventi_assegnati.ora_intervento,
        tecnici.nome,
        tecnici.cognome,
        interventi.dettagli,
        interventi.indirizzo,
        interventi.tipologia

        FROM
        interventi_assegnati

        LEFT JOIN
        tecnici ON interventi_assegnati.operatore_id = tecnici.id
        LEFT JOIN
        interventi ON interventi_assegnati.intervento_id = interventi.id
    `
    const queryBuilder = `
        CREATE TABLE IF NOT EXISTS interventi_assegnati (
        id SERIAL PRIMARY KEY,
        intervento_id INTEGER NOT NULL REFERENCES interventi(id),
        operatore_id INTEGER NOT NULL REFERENCES tecnici(id),
        data_intervento DATE NOT NULL,
        ora_intervento TIME NOT NULL
    );
    `

    try {
        let client = await pool.connect();
        await client.query(queryBuilder)
        const result = await client.query(querySelect)
        if(result.rows === 0) {
            console.error('nessun dato trovato')
        } else {
            res.status(200).json(result.rows);

        }


    } catch (error) {
        console.error('Errore nella comunicazione con il db:', error);
        res.status(500).json({ error: 'Errore interno del server' });
    }
}