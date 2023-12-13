Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione:
Rifare l'esercizio della to do list.
Create una todolist in cui ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
Non proseguite nelle milestone se non avete terminato quella su cui state lavorando
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


**PROBLEMA ESERCIZIO**
1 - Creare la struttura per il collegamento a Vuejs
2 - Creare array di oggetti con all'interno solo i valori di texy e done

**MILESTONE 1**
3 - Stampare nel DOM i valori dell'array di oggetti
4 - Se la proprietà done è uguale a true, impostare un text-decoration-through

**MILESTONE 2**
5 - Aggiungere un'icona x a fianco di ogni elemento della todoList 
6 - Al click, aggiungere l'interazione della rimozione di tale elemento dal flusso del DOM

**MILESTONE 3**
7 - Aggiungere un input
8 - All'interno dell'input possiamo aggiungere elementi al todoList (e, quindi, all'array di oggetti)

**BONUS**
9 - Nell'input, al click sulla testiera del tasto enter, viene aggiunto il valore che abbiamo inserito precedentemente nell'input alla todoList
10 - La proprietà done deve cambiare da tre a false cliccando sul testo (e non solo sull'icona)