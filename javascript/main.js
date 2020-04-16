

// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
 // nome, cognome e età.
var studente = {
  "nome" : "Marco",
  "cognome" : "Randazzo",
  "eta" : 28
}

// -Stampare a schermo attraverso il for in tutte le proprietà;
for (var variable in studente) {
  console.log(studente[variable]);
}

// - Creare un array di oggetti di studenti.
var studenti = [
  {
    "nome" : "Alessio",
    "cognome" : "Tai",
    "eta" : 17
},
  {
    "nome" : "Gianfranco",
    "cognome" : "Lungo",
    "eta" : 73
},
  {
    "nome" : "Mutendina",
    "cognome" : "Corta",
    "eta" : 29
}];

// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < studenti.length; i++) {
  console.log("Nome studente " + studenti[i].nome + " Cognome studente " + studenti[i].cognome);
}

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.

$("button").click(function(){
  var nuovoNome = prompt("inserisci nome studente");
  var nuovoCognome = prompt("inserisci cognome studente");
  var nuovaEta = parseInt(prompt("inserisci età studente"));
  var numeroMatricolaNuovoStudente = studenti.length + 1;
  var nuovoStudente = {
    "nome" : nuovoNome,
    "cognome" : nuovoCognome,
    "eta" : nuovaEta,
    "numero" : numeroMatricolaNuovoStudente
  }
  studenti.push(nuovoStudente);
  $("body").append(magnalo(nuovoStudente))

})

// BONUS: (ma solo se il resto è fatto)
// Curo per bene l’output dell’elenco studenti, creando un layout carino;
// il “blocchetto studente” in pagina, sarà uguale per tutti, quindi potrei usare handlebars per gestire i blocchetti;
// varie che vi vengono in mente per sperimentare;

var template = $("#giacomino-template").html();
var magnalo = Handlebars.compile(template);

studente1 = {
  nome : "Alessio",
  cognome : "Tai",
  eta : 17,
  numero : 1
}
studente2 = {
  nome : "Gianfranco",
  cognome : "Lungo",
  eta : 73,
  numero : 2
}
studente3 = {
  nome : "Mutendina",
  cognome : "Corta",
  eta : 29,
  numero : 3
}
$("body").append(magnalo(studente1))
$("body").append(magnalo(studente2))
$("body").append(magnalo(studente3))
