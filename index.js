const metodos = require('./metodos.js'); 

const filesArrayAppend = metodos.getFiles('filesAppend');
console.log('Listado de archivos ---A--- = ',filesArrayAppend);

const filesArrayDelete = metodos.getFiles('filesDelete');
console.log('Listado de archivos ---D--- = ',filesArrayDelete);

const arrayAppend = metodos.loadAllFilesToArray('filesAppend');
console.log('Cantidad de registros de todos los archivos ---A--- =',arrayAppend.length);

const arrayDelete = metodos.loadAllFilesToArray('filesDelete');
console.log('Cantidad de registros de todos los archivos ---D--- =',arrayDelete.length);

const arrayFilters = metodos.deleteRows(arrayAppend, arrayDelete);
console.log('Cantidad de registros despues de eliminar =', arrayFilters.length);

const newFileArray = metodos.loadAllFilesToArray('filesNew')
console.log('Cantidad de registros a cargar/eliminar =', newFileArray.length);

metodos.getDuplicatedItems(arrayFilters, newFileArray);
