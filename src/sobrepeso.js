peso = 1200000 // aqui transformei peso em "quilogramas em gramas"
altura = 173 * 173 // aqui tranformei metros em centiment

const imcAtual = peso/altura;


if (imcAtual < 24.9){
    
console.log (`O indice de massa corporal do Eli é de ${imcAtual.toFixed(2)}, esta normal.`)
    
}else   
{

    console.log (`Por favor procure um endocrinologista, pois seu imc é de  
    ${imcAtual.toFixed(2)} é considerado irregular`)

}