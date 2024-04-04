# E-COMMERCE: FRONTEND

#### Teconologie usate:

_VueJs_, _Bootstrap_, _Sass_, _Axios_, _Vue-Router_

Ho deciso di gestire il lato frontend utilizzando il framework VueJs, Ho utilizzato Boostrap per poter dare un layout semplice e funzionale al sito.

**N.B.** Per poter visualizzare i dati dovrai sostituire il baseUrl nel dile store.js con il tuo url localhost con cui hai lanciato il progetto backend!

Ho strutturato il codice nel seguente modo:

1. Ho impostato Vue router e poi ho creato le nostre principali pagine (HomePage, ProductPage, CheckoutPage...) e i nostri 2 componenti di layout AppHeader e AppFooter.
2. Ho impostato la chiamata Axios da fare nel Craeted della HomePage per ottenere tutti i dati dei Products.
3. Ho impostato un semoplice layout usando le classi di Boostrap per mostrare il nostro catalogo di Sofa.
4. Ho impostato la paginazione (5 prodotti per pagina)
5. Ho impostato la chimata Axios da fare nel Craeted della ProductPage aiutando con i dati che si posso passare tra le rotte grazie a Vue router.
6. Ottenuti i dati del singolo prodotto, li ho mostrati in pagina e poi ho creato un semplice carrello usando il localStorage per permettere all'utente di comprare un prodotto.
7. Nella pagina CheckoutPage ho impostato un smeplice form fittizioe ho riportato di nuovo i dati del carello per mostarare all'utente nuovamente ciò che sta acquistando.
8. Una volta avvenuto l'aquisto invio i dati tramite una chiamata Axios in post, la API che ho progettato salva i dati dell'utente (client, total, date) nella tabella Orders e alcuni dati del/i Prodoct/s nella tabella pivot order_product.
9. Confermato l'aquisto l'utente viene reindirizzato nella pagina ThankyouPage.
10. Infine ho preparato una tabella nella pagina OrdersPage, ho effettuato una chiamata axios per ottenere tutti gli Orders con i relativi Products sempre tramite la tabella pivot e poi li ho inseriti nella tabella.

Per lanciare il progetto dobbiamo lanciare prima i seguenti comandi:

1. npm i
2. npm run dev

_N.B_ Assicurati che il server del backend sia online!
