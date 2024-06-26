console.log('JS funziona');


const contacts = [
  {
    name: 'Michele',
    avatar: './img/avatar_1.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Hai portato a spasso il cane?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di stendere i panni',
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
    avatar: './img/avatar_2.jpg',
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
    avatar: './img/avatar_3.jpg',
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
    name: 'Alessandro B.',
    avatar: './img/avatar_4.jpg',
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
  {
    name: 'Alessandro L.',
    avatar: './img/avatar_5.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la sento',
        status: 'received'
      }
    ],
  },
  {
    name: 'Claudia',
    avatar: './img/avatar_6.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'received'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'sent'
      }
    ],
  },
  {
    name: 'Federico',
    avatar: './img/avatar_2.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che è il suo compleanno!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Davide',
    avatar: './img/avatar_4.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
      }
    ],
  }
]

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: contacts,
      currentChatIndex: 0,
      inputMessage: '',
      inputSearch: '',
      contactsFilter: [],


    }
  },
  watch: {
    inputSearch(newValue, oldValue) {
      // console.log('now:', this.inputSearch)
      // console.log('new:', newValue)
      // console.log('old:', oldValue)
    }
  },
  methods: {
    viewCurrentChat(index) {
      this.currentChatIndex = index
      console.log(index)
    },

    sendNewMessage() {
      let newMessage = {
        message: this.inputMessage,
        status: 'sent',
        date: '20/03/2020 16:30:00',
      }
      this.contacts[this.currentChatIndex].messages.push(newMessage);
      this.inputMessage = '';

      const answer = 'ok'
      const answerOblect = {
        message: answer,
        status: 'received',
        date: '20/03/2020 16:30:00',
      }

      setTimeout(() => {
        this.contacts[this.currentChatIndex].messages.push(answerOblect);

      }, 1000)
    },
    findContact() {
      // FILTRO
      const filtered = this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()) === true;
      })
      //filtro contatti
      this.contactsFilter = filtered;
    },
    eraseMessage(messageIndex) {

      if(this.currentContact.messages.length > 1){
        this.currentContact.messages.splice(messageIndex,1)
        console.log(this.currentContact)
      } else {
        this.contactsFilter.splice(this.currentContact)
      }

    }
  },
  computed: { //si utilizzano come proprietá che ci aiutano a calcolare delle proprieá e vengono scritte come funzioni
    currentContact() { //queste funzioni non accettano parametri perché non vvengono invocate
      return this.contacts[this.currentChatIndex]
    },

    // contactsFilter() {
    //   return this.conctats.filter(contact => contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()))
    // }
    // tolgo contactsFilter vuoto nelle date
    //tolgo il mounted

  },
  mounted() {
    this.contactsFilter = this.contacts;
  }
}).mount('#app')







































