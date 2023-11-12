const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var cors = require('cors');

const app = express();

//componets
const conectarDB = require('./config/db')
const categoriaRoutes = require('./routes/categorias.routes')
const productosRoutes = require('./routes/productos.routes')
const logosRoutes = require('./routes/logos.routes')

// contectar DB
conectarDB();

// parsear datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración para usar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));

// Configuraciones del servidor
app.use(cors());
app.use(helmet());

// Middlewares
app.use('/api', categoriaRoutes)
app.use('/api', productosRoutes);
app.use('/api', logosRoutes)

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 9000;
const host = process.env.HOST || '0.0.0.0';

// Iniciar servidor
app.listen(port, host, () => {
    console.log(`la aplicación escuchando en puerto: ${port}`);
});

