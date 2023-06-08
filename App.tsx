import React, { useState } from 'react'; // Importă modulul React și funcția useState din biblioteca React.

import './index.css'; // Importă fișierul CSS asociat componentei.

function App() {
  // Definește componenta principală App, care este o funcție React.

  // Stare inițială
  const [x1, setX1] = useState(0); // Declara variabila de stare x1 și funcția setX1 pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este 0.
  const [x2, setX2] = useState(0); // Declara variabila de stare x2 și funcția setX2 pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este 0.
  const [y1, setY1] = useState(0); // Declara variabila de stare y1 și funcția setY1 pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este 0.
  const [y2, setY2] = useState(0); // Declara variabila de stare y2 și funcția setY2 pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este 0.
  const [distanta, setDistanta] = useState(''); // Declara variabila de stare distanta și funcția setDistanta pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este un șir vid.
  const [message, setMessage] = useState(''); // Declara variabila de stare message și funcția setMessage pentru a gestiona valoarea și actualizarea sa. Valoarea inițială este un șir vid.

  let calcDistanta = (event) => {
    // Defineste o funcție calcDistanta care este apelată la evenimentul de submit al formularului.

    event.preventDefault(); // Previne acțiunea de submit implicită a formularului.

    if (x1 === 0 || x2 === 0 || y1 === 0 || y2 === 0) {
      // Verifică dacă una dintre variabilele de stare are valoarea 0.
      alert('Adauga coordonatele valide.'); // Afisează un mesaj de alertă cu privire la coordonatele invalide.
    } else {
      let distanta = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5; // Calculează distanța folosind formula distanței euclidiene între două puncte.
      setDistanta(distanta.toFixed(10)); // Actualizează valoarea variabilei de stare distanta cu distanta calculată și rotunjită la 10 zecimale.
    }
  };

  let imgSrc;

  if (x1 === 0 || x2 === 0 || y1 === 0 || y2 === 0) {
    // Verifică dacă una dintre variabilele de stare are valoarea 0.
    imgSrc = null; // Setează valoarea variabilei imgSrc la null.
  } else {
    imgSrc =
      'https://www.geogebra.org/resource/nrun7teh/r2rrakmQluvTRyA0/material-nrun7teh.png'; // Setează valoarea variabilei imgSrc la URL-ul imaginii.
  }

  let reload = () => {
    // Defineste o funcție reload care este apelată la click-ul pe butonul "Resetare".
    window.location.reload(); // Reîncarcă pagina curentă.
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Calculator Coordonate</h2>{' '}
        {/* Afisează un titlu */}
        <form onSubmit={calcDistanta}>
          {' '}
          {/* Se atașează funcția calcDistanta la evenimentul de submit al formularului */}
          <div>
            <label>X1</label> {/* Afisează eticheta pentru primul input */}
            <input value={x1} onChange={(e) => setX1(e.target.value)} />{' '}
            {/* Creează un input controlat care primește valoarea din variabila de stare x1 și apelează setX1 la fiecare schimbare a valorii */}
          </div>
          <div>
            <label>X2</label> {/* Afisează eticheta pentru al doilea input */}
            <input value={x2} onChange={(e) => setX2(e.target.value)} />{' '}
            {/* Creează un input controlat care primește valoarea din variabila de stare x2 și apelează setX2 la fiecare schimbare a valorii */}
          </div>
          <div>
            <label>Y1</label> {/* Afisează eticheta pentru al treilea input */}
            <input
              value={y1}
              onChange={(event) => setY1(event.target.value)}
            />{' '}
            {/* Creează un input controlat care primește valoarea din variabila de stare y1 și apelează setY1 la fiecare schimbare a valorii */}
          </div>
          <div>
            <label>Y2</label> {/* Afisează eticheta pentru al patrulea input */}
            <input
              value={y2}
              onChange={(event) => setY2(event.target.value)}
            />{' '}
            {/* Creează un input controlat care primește valoarea din variabila de stare y2 și apelează setY2 la fiecare schimbare a valorii */}
          </div>
          <div>
            <button className="btn" type="submit">
              {' '}
              {/* Afisează un buton de tip submit */}
              Introducere
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              {' '}
              {/* Afisează un buton care activează funcția reload la click */}
              Resetare
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Distanta dintre puncte este: {distanta}</h3>{' '}
          {/* Afisează distanța calculată */}
          <p>{message}</p> {/* Afisează un mesaj */}
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>{' '}
          {/* Afisează o imagine cu src-ul bazat pe valoarea variabilei imgSrc */}
        </div>
      </div>
    </div>
  );
}

export default App;
