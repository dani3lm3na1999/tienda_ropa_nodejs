const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const helmet = require('helmet');
var cors = require('cors');

//componets
const conectarDB = require('./config/db')
const categoriaRoutes = require('./routes/categorias.routes')
const productosRoutes = require('./routes/productos.routes')
const logosRoutes = require('./routes/logos.routes')

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
app.use(cors());
app.use(helmet());

// Middlewares
app.use('/api', categoriaRoutes)
app.use('/api', productosRoutes);
app.use('/api', logosRoutes)

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

