# Redux 

<p align="center">
  <img src="./public/logoRedux.png" alt="Immagine Header" width="300px" height="auto"/>
</p>

## Primo progetto in Redux
### Remote Job Search
In questo primo progetto ho sperimentato l'uso base di Redux. Ho creato due differenti Reducers che rendono comuni dei dati per i component della pagina;
Il primo è un reducer puro che salva in uno slice dello store gli oggetti "jobs" ricevuti dalla fetch all'API di ricerca lavori, il secondo è un reducer asincrono che salva in un secondo slice l'array con gli ultimi risultati di ricerca, e salva in un secondo array di array i risultati senza svuotarli nel dispatch successivo. 

React - BootStrap - Redux