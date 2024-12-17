function criaCalculadora() {
    return {
    // seção atributos
    display: document.querySelector('.display'),
    //btnClear: document.querySelector('.btn-clear'), // como eu estou chamndo na funcçaõ botaõ não preciso criar o botão

    // aquia para baixo metodos
    inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
    },

    pressionaEnter() {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    },

    clearDisplay() {
        this.display.value = '';
    },

    apagaUm() {
        this.display.value = this.display.value.slice(0, -1); 
    },
    
    realizaConta() {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida')
                return; 
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida')
            return; 
        }

    },
    
    

        // cliqueBotoes() {
        //     document.addEventListener('click', function(e) {
        //         const el = e.target;

        //         if(el.classList.contains('btn-num')) {
        //             this.btnParaDisplay(el.innerText); // para usar uma função em outra função eu preciso da palavra this
        //         }
        //     }.bind(this)) // estou pedindo para o js usar o meu this
        // },

        cliqueBotoes() {
            document.addEventListener('click', (e) => { // a heronfunnction não permite alteraçãodo this então o meu this antgo vai continuar o mesmo
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // para usar uma função em outra função eu preciso da palavra this
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia();