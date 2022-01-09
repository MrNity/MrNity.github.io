// ----- Подключенные библиотеки -----
const express           = require('express')
const cookieParser      = require('cookie-parser')
const session           = require('express-session')
const bodyParser        = require('body-parser')
const MongoStore        = require('connect-mongo')(session)
const path              = require('path')
const http              = require('http')
const axios             = require('axios')
const mongoose          = require('mongoose')
const fs                = require('fs')

// -----------------------------
// FILES
const config            = require('./config')

// -----------------------------
// CONSTANTSр
const views             = path.join(__dirname, './views')




const app               = express()
const server            = http.createServer(app)

const port              = 80




// -----------------------------
// START DATABASE
//mongoose.connect(config.DB_URL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true}).then (() => {
//    console.log(`База данных подключена`)
//}).catch((e) => {
//    new Error(e)
//   console.error(e)
//})



// -----------------------------
// НАСТРОЙКА ПРИЛОЖЕНИЯ
app.set('view engine', 'ejs')

app.use('/css', express.static('css'))
//app.use('/images', express.static('images'))
//app.use('/fonts', express.static('fonts'))
//app.use('/js', express.static('js'))
//app.use('/libs', express.static('libs'))

app.use(cookieParser())
app.use(session({
    secret: config.session.secret,
    key: config.session.key,
    cookie: config.session.cookie,
    resave: true, 
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.disable('x-powered-by')


// --------------------------------------- PAGES ----------------------------------------
app.get('/', function (req, res) {
    
        res.render(`index.ejs`, {
            title: `Nity's Official Page`,
        })
            
})













// -----------------------------
// START SERVER

//https.createServer({
//  key: fs.readFileSync('server.key'),
//  cert: fs.readFileSync('server.cert')
//}, app)
//.listen(https_port, function () {
//  console.log(`HTTPS сервер был запущен на порту ${https_port}`)
//})

server.listen(port, () => {
    console.log(`Сервер был запущен на порту ${port}`)
})

// -----------------------------
// FUNCTIONS


