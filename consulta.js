const { Pool } = require('pg');

const pool =  new Pool ({
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'cursos',
  port: 5432,
})

async function nuevoCurso(nombre, nivel, fecha, duracion) {
  try {
    const res = await pool.query(
      `INSERT INTO cursos (nombre,nivel,fecha,duracion) VALUES ('${nombre}','${nivel}','${fecha}','${duracion}') RETURNING *`
    );
    return res.rows
  }catch (e) {
    return e;
  }
}

async function consultar(){
  try {
    const res = await pool.query(
      'SELECT * FROM cursos '
    );
    //console.log('Registros:', res.rows)
    return res.rows
  } catch (e) {
    return e;
  }
}

async function editar(id,nombre,nivel,fecha,duracion){

  //const query = Object.keys(newDato).map(namekey => newDato[namekey] ? `${namekey} = '${newDato[namekey]}'` : '').filter(el => el).join(', ')

  try {
    const res = await pool.query(
      `UPDATE cursos SET nombre = '${nombre}', nivel = '${nivel}', fecha = '${fecha}', duracion = '${duracion}' WHERE id = '${id}' RETURNING *`
    );
    return res.rows
  }catch (e) {
    return e;
  }
}

async function eliminar(id){

  try {
    const res = await pool.query(
      `DELETE FROM cursos WHERE id = '${id}'`
    );
    return res.rowsCount
  }catch (e) {
    return e;
  }
}



module.exports = {
  nuevoCurso,
  consultar,
  editar,
  eliminar
}
