/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype presenti in JavaScript sono vari, si distinguono tra primitivi e strutturali. Tra i primitivi riconosciamo:
- String: serve per gestire un tipo di dato costituito da parole, che si trasformi quindi in parole, frasi o anche numeri che vogliamo che l'utente possa leggere sulla pagina. 
Il suo contenuto non ha una quantità precisa o limitata.
Questo significa che, qualora scrivessimo un numero, questo non potrà essere utilizzato per operazioni numeriche, ma solo per indicare una certa quantità.
Si inserisce il contenuto della stringa tra diversi tipi di virgolette. Le doppie virgolette ("") e i singoli apici ('') che hanno lo stesso valore,
oppure il blocktick (``) che permette di andare a capo nella stringa, al contrario degli altri due simboli;
- Number: serve per esprimere un certo valore numerico che possa essere usato anche nelle operazioni. Di solito, in una varibile, non ha bisogno di
essere introdotto da alcun elemento di punteggiatura. Comprende tutti i tipi di numero (decimale, intero...) senza bisogno di differenziarlo con tipi diversi.
Appartiene a questa categoria anche il NaN (NotaNumber), di solito messaggio che compare laddove un operazione porti come esito non ad un numero per errore;
- Boolean: distingue tra dati "true" e "false". Questo vuol dire che come dato può avere esclusivamente questi due valori e permette di effettuare 
delle verifiche sui dati presenti in un file;
- Undefined: è il valore che viene associato ad un qualunque dato a cui non sia stato dato nessun valore di base. Una sorta di messaggio "d'errore" per
segnalare l'assenza di un valore;
-Null: simile al precedente tipo in quanto ad assenza di valore. La differenza è che nel presente caso tale assenza è voluta e si presenta 
quando, ad esempio, un dato viene svuotato del valore che precedentemente gli era stato assegnato;
- BigInt: rappresenta un valore numerico estremamente grande che supera il valore che JS è in grado di supportare nel datatype Number.
- Symbol: è un datatype che permette di assegnare un valore unico e immutabile ad un certo dato. Mnentre nel caso degli altri tipi primitivi finora visti
il valore è modificabile, nel caso di symbol questo resterà invariato e non potrà essere in nessun modo trasformato.
Per quanto riguarda quelli strutturali, essi possono essere:
- Object: rappresenta un insieme di variabili che raccoglie coppie chiave-valore. Questo vuol dire si dichiarano delle variabili al suo interno e si associano
a queste dei valori. I dati dell'oggetto prendono il nome di proprietà. 
Questo può contenere al proprio interni innumerevoli altri object. Potrebbe essere visto come una matrioska di 
dati che necessitano di una specifica sintassi, ovvero: const obj = {
                                                                x : value;
                                                                }
senza la quale l'oggetto non funzionerebbe correttamente nel codice;
- Function: permette di richiamare una funzione per rieseguirla in base al valore assegnato. Di base una function è una non-data structure;
- Array: rappresenta un insieme di dati.
- */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
- Object: rappresenta un insieme di variabili che raccoglie coppie chiave-valore. Questo vuol dire si dichiarano delle variabili al suo interno e si associano
a queste dei valori. I dati dell'oggetto prendono il nome di proprietà. 
Questo può contenere al proprio interni innumerevoli altri object. Potrebbe essere visto come una matrioska di 
dati che necessitano di una specifica sintassi, ovvero: const obj = {
                                                                x : value;
                                                                }
senza la quale l'oggetto non funzionerebbe correttamente nel codice;
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12 + 20) 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Katia"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
console.log(name1 === name2.toLowerCase())