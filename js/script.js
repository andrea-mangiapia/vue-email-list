var app = new Vue({
    el: '#root',
    data: {
        randomEmail: []
    },
    methods:{

    },

    mounted() {
        // Richiamo l'email random per 10 volte con il ciclo "for"
        for(let i=0; i < 10; i++){
            // Chiamata API random email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                // Pushare la mail random nell'array
                this.randomEmail.push(response.data.response);
            });
        } 
    },
});