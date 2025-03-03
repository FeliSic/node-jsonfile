//  aca estan todas las abreviaciones sobre cada metodo readFile,readFileSync y writeFile y writeFileSync
const functions = require('./')

// Abreviación de writeFileSync
functions.wFS('./test2/functionsTest.json', {
  functions: 'hola'
})

// Abreviación de readFileSync
const leer = functions.rFS('./test2/alo.txt', 'utf-8')
console.log(leer)

// Abreviación para readFile
const leyendoArchivo = (ruta) => {
  functions.rF(ruta, 'utf-8', (error, contenido) => {
    if (error) {
      console.log('error al leer el archivo', error)
      return
    }
    console.log(contenido)
  })
}

leyendoArchivo('./test2/alo2.txt')

// Abreviación para writeFile
functions.wF('./test2/functionsTest2.json', {
  Bienvenida: 'hola muy buenos días compañero/a'
})
