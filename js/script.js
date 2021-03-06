console.log('Vue', Vue); // Verifica Vue


// Locale
// dayjs.extend('it')



// Plugins
dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_relativeTime);
dayjs.extend(dayjs_plugin_updateLocale);

dayjs.updateLocale('en', {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: 'a few seconds',
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    }
  })


const app = new Vue({
    el: '#app',

    data: {
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },

        

        answer:[
            'bene grazie',
            'si',
            'no',
            'va bene',
            'tu?',
            'ciao',
            'ok',
            'perchΓ¨',
            'buona giornata',
        ],

        // Emoji
        emoji: false,
        editEmoji: {
            index: null,
            symbol:'',
        },
        emojiSimbol: [
            {
                name: 'smile',
                symbol: 'π'
            },
            {
                name: 'skull',
                symbol: 'π'
            },
            {
                name: 'hello',
                symbol: 'π'
            },
            {
                name: 'heart',
                symbol: 'π'
            },
            {
                name: 'kiss',
                symbol: 'π'
            },
            {
                name: 'confused',
                symbol: 'π'
            },
            {
                name: 'rolling',
                symbol: 'π€£'
            },
            {
                name: 'sweat',
                symbol: 'π'
            },
            {
                name: 'halo',
                symbol: 'π'
            },
            {
                name: 'ok',
                symbol: 'π'
            },
            {
                name: 'up',
                symbol: 'π'
            },
            {
                name: 'down',
                symbol: 'π'
            },
            {
                name: 'smirking',
                symbol: 'π'
            },
            {
                name: 'bigSmile',
                symbol: 'π'
            },
            {
                name: 'sunglasses',
                symbol: 'π'
            },
            {
                name: 'horns',
                symbol: 'π'
            },
            {
                name: 'smilieCLoseEyes',
                symbol: 'π'
            },
            {
                name: 'hotDog',
                symbol: 'π­'
            },
            {
                name: 'birthday',
                symbol: 'π'
            },
            {
                name: 'game',
                symbol: 'π?'
            },
            {
                name: 'pizza',
                symbol: 'π'
            },
            {
                name: 'beers',
                symbol: 'π»'
            },
            {
                name: 'headphones',
                symbol: 'π§'
            },
            {
                name: 'rose',
                symbol: 'πΉ'
            },
            {
                name: 'italy',
                symbol: 'π?πΉ'
            },
        ],

    // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        indexChat: 0,   // Posizione indice attuale nell'array

        newText: '',

        searchChat:'',

        numb: 0,
      
        data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        chat:0,

    },

    // mounted(){
    //     this.updateStatus()
    // },

    methods: {
        // Functions per selezionare la chat
        setChat(index){
            console.log(index)
            this.indexChat = index;
        },

        // Functions per scrivere nuovo messggio
        newMessage(){

            if(this.newText !== ''){
                this.contacts[this.indexChat].messages.push({
                    message: this.newText,
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    status: 'sent',
                });

                setTimeout(() =>{
                    this.data = 'sta scrivendo...'
                },1000)
                
            // Risposta Automatica
            setTimeout(() =>{
                console.log('ok')
                // this.numb = randomNumber();
                // console.log('frase', this.answer[this.numb])

                this.contacts[this.indexChat].messages.push({
                    message: this.answer[this.randomNumber()],
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    status:'received',

                });



                this.calcolateData()

                
                 this.updateStatus()
                
            }, 4000);

            // console.log('click', dayjs())
            

            // Reset Input dopo averlo inserito
            this.newText = '';

            this.$refs.newText.focus(); // Per far tornare il focus all'unput dopo averlo inserito

            // console.log('Message');

            };

        },

        messageFocus(){
            this.$refs.newText.focus();
        },

        // Function per portare focus al search
        addFocusSearch(){
            this.$refs.search.focus()
        },

        // Function per aprire finestra emoji

        openWindow(){
            console.log('click')

            this.emoji = ! this.emoji;
            //  if(this.emoji){
            //      this.emoji = false;
            //  } else {
            //      this.emoji = true;
            //  };

        },

        // Function per chiudere la finestra delle emoji

        closeWindow(){
            console.log('click')
            this.emoji = false;
        },

        // Function per prendere valore emoji

        updateEmoji(symbol,index){
            console.log('click');
            console.log(index);
            console.log(symbol.symbol);
            this.editEmoji.symbol = this.emojiSimbol[index].symbol;
            this.newText = this.newText + symbol.symbol;

            // console.log(this.emojiSimbol.index)

            this.messageFocus()

        },

        // Function per cercare conversazione
        contactChat(){
            console.log(this.searchChat.toLowerCase());

            this.contacts.forEach((element,index) =>{
                // console.log(element.name)

                
                
                
                if( element.name.toLowerCase().includes(this.searchChat.toLowerCase())){
                    console.log(element.name)
                    
                    element.visible = true;
                    console.log(index);

                    this.chat = index;

                    this.chat = this.openChat(index);  // Per aprire la chat


                } else{
                    console.log('nessuna chat')
                    element.visible = false
                }


            })

        },

        // Function per numeri random
        randomNumber(){
             console.log('numero');
 

             this.numb = Math.floor(Math.random() * this.answer.length);
             console.log(this.numb)

             return this.numb;

        },

        //Function per data
        calcolateData(){
            this.data = dayjs().format('DD/MM/YYYY HH:mm:ss');
            console.log(this.data)
            return this.data;
        },

        // Funzione per aggiornare status utente

        updateStatus(){
            setInterval(() =>{
                console.log('cambiare stato utente')
                this.data = 'Ultimo Accesso' + dayjs().fromNow();
                },5000);
        },
            

        // Function per keyboard
        nextChat(){
            console.log('up')
            this.indexChat = (this.indexChat == 0) ? this.indexChat = (this.contacts.length - 1) : this.indexChat - 1;
            
            
        },
        prevChat(){
            console.log('down')
            this.indexChat = (this.indexChat == (this.contacts.length - 1)) ? 0 : this.indexChat + 1;
        },

        //Function per aprire chat quando viene cercata

        openChat(index){
            console.log('open')
            this.setChat(index)
        },

    }
});
    
    
    

    


