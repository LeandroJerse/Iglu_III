const express = require('express')
const routes = require('./api/index')
const {sequelize} = require('./models/index.js')
const db = require('./models/index.js')
const cors = require('cors')


const app = express()
app.use(cors()) //habilitar o cors para permitir requisições de outros domínios

//pesquise localhost:3000 no navegador
//ou use o postman para fazer requisições para o servidor


app.use(express.json())
app.use('/', routes) //usar o express para usar as rotas do arquivo index.js
//app.use('/cursos', cursosRouter) //usar o express para usar as rotas do arquivo cursos.js

sequelize.sync().then(()=> {
    console.log('Banco de dados sincronizado com sucesso!')
}) 
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});