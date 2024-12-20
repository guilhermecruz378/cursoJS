function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliques();
        this.teclaEnter()
    }

    this.teclaEnter = () => {
    this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            this.eq();
        }
    });
    // this.display.addEventListener('keypress', e => {
    //     if(e.keyCode === 99) {
    //         this.clear()
    //         this.display.value = ''
    //     }
    // });

    };
    this.cliques = () => {
        document.addEventListener('click', event =>{
            const elemento = event.target;
            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if(elemento.classList.contains('btn-clear')) this.clear();
            if(elemento.classList.contains('btn-del')) this.del();
            if(elemento.classList.contains('btn-eq')) this.eq();
        })
    }

    this.addNumDisplay = (elemento) => {
        this.display.value += elemento.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del =()=>this.display.value = this.display.value.slice(0,-1);
    this.eq = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida')
            return
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();