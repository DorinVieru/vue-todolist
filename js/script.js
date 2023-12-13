// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data() {
        return {
            logo: "./img/logo.png",
            text_task: "",
            todo_list: [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare i compiti",
                    done: false,
                },
                {
                    text: "Palestra",
                    done: false,
                },
                {
                    text: "Andare in posta",
                    done: false,
                },
                {
                    text: "Preparare la cena per gli ospiti",
                    done: false,
                },
                {
                    text: "Pulire casa",
                    done: false,
                }
            ]
        }
    },

    // FUNZIONI
    methods: {

        // MILESTONE 2
        // FUNZIONE PER RIMUOVERE UN ELEMENTO DAL TODOLIST CON LA RICHIESTA DI CONFERMA
        removeTodo(index) {
            let confirmation = confirm("Sei sicuro di voler cancellare questo elemento dalla tua lista?")
            if (confirmation) {
                this.todo_list.splice(index, 1);
            }
        },

        // MILESTONE 3
        // FUNZIONE PER AGGIUNGERE NUOVI OGGETTI ALL'ARRAY
        addTask() {
            let obj = {
                text: this.text_task,
                done: false
            }
            this.todo_list.push(obj);

            this.text_task = '';
        }
    }

    // CHIUSURA createApp CON .MOUNT("ID")
}).mount('#app');