const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

const {nuevoCurso, consultar, editar, eliminar} = require('./consulta')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/curso', async (req, res) => {
  const { nombre, nivelTecnico, fechaInicio, duracion } = req.body;
  const respuesta = await nuevoCurso(nombre, nivelTecnico, fechaInicio, duracion);
  res.send(respuesta);
});

app.get('/cursos', async (req, res) => {
  const respuesta = await consultar();
  res.send(respuesta);
});

app.put('/curso/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre,nivel,fecha,duracion } = req.body;
  const respuesta = await editar ( id, nombre,nivel,fecha,duracion );
  res.send(respuesta)
  console.log(id, nombre,nivel,fecha,duracion)
})

app.delete('/curso/:id',async(req,res)=>{
  const { id } = req.params;
  const respuesta = await eliminar(id);

  respuesta > 0
      ? res.send(`El curso de id ${id} fué eliminado con éxito`)
      : res.send('No existe un curso registrado con ese id');
})


app.listen(PORT, () => {
  console.log(` Servidor arriba localhots/${PORT}`)
})