// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data() {
        return {
            todo_list: [
                {

                }
            ]
        }
    },

    // FUNZIONI
    methods: {
        
    },

    // CHIUSURA createApp CON .MOUNT("ID")
}).mount('#app');