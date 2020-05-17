const fs = require('fs');

/** 
 * metodo que identifica cuales son los registro duplicados entre dos array
 * los parametros de entrada son 2 array
 * retorna el listado de los elementos duplicados y el tiempo que toma realizar la busqueda
 * OK
*/
const getDuplicatedItems = (dataMainFile, dataSecondFile) => {
    console.time('Measuring Time');
    console.log('Elementos duplicados que no se pudieron insetar/eliminar = ', intersect(dataMainFile, dataSecondFile));
    console.timeEnd('Measuring Time');
};

/**
 * metodo para unir todos los archivos csv de un directorio
 * recibe como parametro el nombre del directorio
 * el directorio debe estar dentro del proyecto
 * retorna un array con todos los elementos de todos los archivos del directorio
 * Ok
*/
const loadAllFilesToArray = (dirAppend) => {

    try {
        let dataAppend = [];
        let filesAppend = getFiles (dirAppend);

        filesAppend.forEach((file) => {
        let data = loadCSVtoArray(`${dirAppend}/${file}`);
        dataAppend = dataAppend.concat(data);  
        });
        //console.log('dataAppend =',dataAppend);
        //console.log('dataAppend.leght =', dataAppend.length);
        return dataAppend;
      
    } catch (error) {
        return console.log('Error: ', error);
    }
};

/**
 * carga un archivo csv a un array
 * el parametro de entrada filepath es la ruta con directorio y nombre del archivo
 * retorna el array con sus elementos
 * Ok
*/
const loadCSVtoArray = (filePath) => {

    let fileArray = fs.readFileSync(filePath)
        .toString() // convert Buffer to string
        .split('\n') // split string to lines
        .map(e => e.trim()) // remove white spaces for each line
    return fileArray;
};

/**
 * elimina los registros de un array que estan en otro
 * los parametros de entrada son 2 array
 * retorna un array con los elementos del mainArray sin los elementos comunes con delete array
 */
const deleteRows = (mainArray, deleteArray) => {

    let new_array = mainArray.filter(function(item) { 
        return deleteArray.indexOf(item) < 0; // Returns true for items not found in b.
      });
    return new_array;
};

/**
 * metodo para encontrar la insterseccion entre 2 array
 * los parametros de entrada son 2 array
 * retorna un array con los elementos comunes entre los 2 array 
 * OK
 */
function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

/**
 * metodo para obtener todos los archivos que se encuentran dentro de un directorio
 * el parametro de entrada es un string con el nombre del directorio
 * retorna un array con los nombres de los archivos que hay dentro del directorio
 * OK
 */
const getFiles = (dirname) => {

    let dirBuff = Buffer.from(dirname);
    let nameFilesArray = fs.readdirSync(dirname);
    return nameFilesArray;
}

module.exports = {
    loadAllFilesToArray,
    deleteRows,
    loadCSVtoArray,
    getDuplicatedItems,
    getFiles
}