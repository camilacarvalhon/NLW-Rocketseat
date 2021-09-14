
//Servidor
const express= require('express')
const server= express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } =  require("./pages")

//configurar nunjucks(template engine)
const nunjucks= require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})

//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//Configurar arquivos estáticos(css, scripts, imgs)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding) 
.get("/study", pageStudy )
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

