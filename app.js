const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const exphbs = require('express-handlebars')
const session = require('express-session')
const connectDB = require('./config/db')


//load config
dotenv.config({ path: './config/config.env'})

//Passport config
require('./config/passport')(passport)
connectDB()

const app = express()

//logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', exphbs.engine({
    defaultLayout : 'main',
    extname: '.hbs'
}
    ))
app.set('view engine', '.hbs')

//Session middleware
app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
   })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))




const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`))

