'use client'
import error from "next/error";
import { env } from "process";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [tecnici, setTecnici] = useState([{}])
  const [interventi, setInterventi] = useState([{}])
  const [interventiAssegnati, setInterventiAssegnati] = useState([{}])

  const [operatore_id_num, setTecId] = useState()
  const [data_intervento, setDate] = useState()
  const [ora_intervento, setTime] = useState()
  const [intervento_id, setIntId] = useState()

  const [isForm, setForm] = useState(false)

  useEffect(() => {
    getInterventiAssegnati();
    getInterventi();
    getTecnici();
  }, []);


  const getTecnici = async () => {
    try {
      const response = await fetch(`https://exam-demo-sigma.vercel.app/api/tecnici/getTecnici`)
      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();

        setTecnici(data); // Functional update with previous state
        console.log('Data:', data);


      } if (response.status === 500) {

        console.log("errore quiiiii", error)

      } else {
        console.log(error)

      }

    } catch (error) {
      console.error(error);
    }
  };

  const getInterventi = async () => {
    try {
      const response = await fetch(`https://exam-demo-sigma.vercel.app/api/interventi/getInterventi`)
      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        const reverseData = [...data].reverse()
        setInterventi(reverseData); // Functional update with previous state
        console.log('Data:', data);


      } if (response.status === 500) {

        console.log("errore quiiiii", error)

      } else {
        console.log(error)

      }

    } catch (error) {
      console.error(error);
    }
  };

  const getInterventiAssegnati = async () => {
    try {
      const response = await fetch(`https://exam-demo-sigma.vercel.app/api/interventi/getInterventiAssegnati`)
      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        setInterventiAssegnati(data); // Functional update with previous state
        console.log('Data:', data);


      } if (response.status === 500) {

        console.log("errore quiiiii", error)

      } else {
        console.log(error)

      }

    } catch (error) {
      console.error(error);
    }
  };

  const deleteIntervento = async (id) => {
    try {
      const response = await fetch(`https://exam-demo-sigma.vercel.app/api/interventi/${id}`, {
        method: 'DELETE'
      });

      console.log(response)
      if (!response.ok) {
        throw new Error('Errore nella richiesta DELETE');
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Errore nella richiesta fetch:', error);
      throw error;
    }
  }

  const assegnaIntervento = async (e) => {
    e.preventDefault()
    const operatore_id = parseInt(operatore_id_num)
    const data = { intervento_id, operatore_id, data_intervento, ora_intervento }
    console.log(data)

    try {
      const response = await fetch(`https://exam-demo-sigma.vercel.app/api/interventi/assegnaIntervento`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        console.log("Intervento assegnato con successo")
        getInterventiAssegnati()
        setForm(false)
      } else {
        console.error("Errore durante l'assegnazione dell'intervento", error)
      }
    } catch (error) {
      console.error('error', error)
      console.log("Errore durante il caricamento ")
    }

  }


  return (
    <main>
      {
        isForm ?
          <>
            <div className="form-container">
              <form onSubmit={assegnaIntervento}>
                {/* Campo per la data */}
                <input
                  type="date"
                  id="data_intervento"
                  name="data_intervento"
                  value={data_intervento}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />

                {/* Campo per l'orario */}
                <input
                  type="time"
                  id="ora_intervento"
                  name="ora_intervento"
                  value={ora_intervento}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

                {/* Campo per selezionare opzioni */}

                <div style={{ display: 'flex', flexDirection: 'column', height: '8rem', overflowY: "scroll" }}>
                  {tecnici.map(option => (
                    <label key={option.id}>
                      <input
                        type="radio"
                        name="operatore_id_num"
                        id="operatore_id_num"
                        value={option.id}
                        onChange={(e) => setTecId(e.target.value)}
                        required
                      />
                      {option.cognome} {option.nome} {option.disponibile}

                    </label>
                  ))}
                </div>

                {/* Pulsante di invio */}
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <button type="submit" >Invia</button>
                  <button onClick={() => setForm(false)}>Annulla</button>
                </div>


              </form>

            </div>
          </>
          : null
      }
      <div className="cont">
        <h1 style={{ fontSize: '1.7rem' }}>Interventi aperti</h1>
        <div id="open_int">

          {
            interventi.map((item) => (

              <div key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: '#FFFDFD', marginBottom: '0.5rem', padding: '0.4rem', fontSize: 'small', borderRadius: '0.3rem' }}>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{ marginRight: '0.6rem', fontSize: '0.9rem' }}>
                    {item.id}
                  </div>
                  <div>
                    <p><strong>{item.dettagli}</strong></p>
                    <p>{item.indirizzo}</p>
                    <p>{item.tipologia}</p>
                  </div>
                </div>

                <div>
                  <button className="btn normal" onClick={() => { setForm(true), setIntId(item.id) }}>
                    Assegna
                  </button>
                  {/* <button className="btn alert" onClick={() => deleteIntervento(item.id)}>
                    Elimina
                  </button> */}
                </div>
              </div>
            ))
          }
        </div>

        <h1 style={{ fontSize: '1.7rem' }}>Interventi assegnati</h1>
        <div id="closed_int">

          {
            interventiAssegnati.map((item) => (

              <div key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: '#FFFDFD', marginBottom: '0.5rem', padding: '0.4rem', fontSize: 'small', borderRadius: '0.3rem' }}>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{ marginRight: '0.6rem', fontSize: '0.9rem' }}>
                    {item.id}
                  </div>
                  <div>
                    <p><strong>{item.dettagli}</strong></p>
                    <p>{item.indirizzo}</p>
                    <p>{item.tipologia}</p>
                    <p><strong>{item.nome} {item.cognome}</strong></p>
                  </div>
                </div>

                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                  {/* <button className="btn alert" onClick={() => deleteIntervento(item.id)}>
                    Elimina
                  </button> */}
                  <strong>{item.ora_intervento}</strong>
                  <strong>{item.data_intervento}</strong>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="tec_cont">
        <div id="tec_list">
          {
            tecnici.map((item) => (

              <div key={item.id} style={{ backgroundColor: '#FFFDFD', marginBottom: '0.5rem', padding: '0.4rem', fontSize: 'small', borderRadius: '0.3rem' }}>
                <p><strong>{item.nome} {item.cognome}</strong></p>
                <p>Livello: {item.esperienza}</p>
                <p>Spec: {item.specializzazione}</p>
                <p>{item.disponibile}</p>
              </div>

            ))
          }
        </div>
      </div>
    </main>
  );
}
