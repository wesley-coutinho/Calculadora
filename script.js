const previa_operadores = document.querySelector("#previa_operadores");
const operadores_atual = document.querySelector("#operadores_atual");
const botao = document.querySelectorAll("#botao button");

/*class calculadora{
    
    
}*/


botao.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value);
    });
});

