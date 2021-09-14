const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 6000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/porcentagem', function (req, res) {

    const porcento = req.body.porcento
    const valor = req.body.valor
    const porcentagem = req.body.porcentagem




    const calculo = valor / porcento
    const resultado = calculo * porcentagem
    const desconto = valor - resultado
    const aumento = valor + resultado


    res.send(`Portanto ${porcentagem}% de R$ ${valor.toFixed(2)}, equivale à  R$ ${resultado.toFixed(2)} <br><br>
 Com isso se a sua porcentagem de ${porcentagem}% for de desconto do valor R$ ${valor.toFixed(2)} você tera R$ ${desconto.toFixed(2)} <br><br>
 Agora se for ${porcentagem}% a mais serà de R$ ${aumento.toFixed(2)}`)


    node
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})