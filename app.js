// requireds
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

// let data = '';


const argv = require('./config/yargs').argv
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

//console.log(argv._[0]);

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            //.catch(e => console.log(e));
            //console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + colors.green(archivo)))
            .catch(e => console.log(e));
        //console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}


//console.log(argv);


//let base = "8";

// console.log(multiplicar);

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo a sido creado');
// });

//console.log(process.argv);



//let argv2 = process.argv

//console.log('Limite', argv.limite);
//console.log(argv2);

// let parametro = argv[2]
// let base = parametro.split("=")[1]

//console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// console.log(module);

// module.exports = {
//     crearArchivo
// }