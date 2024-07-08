export const techBuilder = () => {
    `
        CREATE TABLE IF NOT EXISTS tecnici (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cognome VARCHAR(255) NOT NULL,
        disponibile BOOLEAN NOT NULL,
        esperienza VARCHAR(255) NOT NULL,
        specializzazione VARCHAR(255) NOT NULL
    );
    `
}