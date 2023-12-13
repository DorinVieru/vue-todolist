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
        removeTodo(index) {
            let confirmation = confirm("Sei sicuro di voler cancellare questo elemento dalla tua lista?")
            if (confirmation) {
                this.todo_list.splice(index, 1);
            }
        }
    }

    // CHIUSURA createApp CON .MOUNT("ID")
}).mount('#app');