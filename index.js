const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const helmet = require('helmet');
var cors = require('cors');

//componets
const conectarDB = require('./src/config/db')
const categoriaRoutes = require('./src/routes/categorias.routes')
const productosRoutes = require('./src/routes/productos.routes')
const logosRoutes = require('./src/routes/logos.routes')

// conectar al servidor
const app = express();

// contectar DB
conectarDB();

// parsear datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('src/uploads'));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración para usar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));

// Configuraciones del servido
app.use(logger('dev'));
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
  }));
app.use(helmet());

// Middlewares
app.use('/api', categoriaRoutes);
app.use('/api', productosRoutes);
app.use('/api', logosRoutes);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  

// Leer el localhost y variables de entorno
const port = process.env.PORT || 9000;
const host = process.env.HOST || '0.0.0.0';

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar servidor
app.listen(port, host, () => {
    console.log(`la aplicación escuchando en puerto: ${port}`);
});

