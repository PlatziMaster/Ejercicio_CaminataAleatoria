# Resolución de problema

La solución fue generada con Angular versión 13

## Ejecutar demo

1. Descarga el repositorio en la rama `caminata-joseVargas`:
    
    `git clone https://github.com/j0s3v4rg4s/Ejercicio_CaminataAleatoria.git`

    `git checkout caminata-joseVargas`

2. Instala las dependencias `npm install`
3. Ejecuta la aplicación `npm start`

## Como usar la aplicación
La interfaz consta de un botón `run game` y dos inputs, uno para configurar el porcentaje de perdida del usuario y el segundo para activar el movimiento en x

El primer input se debe ajustar con un valor entre 0 y 100 antes de oprimir el botón `run game`

El segundo input se debe seleccionar si se quiere activar el movimiento aleatorio en X

### Ejecutar juego
Una vez oprimido el botón `run game` el programa empezara a generar una grafica dependiendo si la cantidad de dinero llega a 0 o a 30. Si llega a 0 el juego automaticamente reinicia los valores por defecto (x:0 y:0 money:20) y vuelve a hacer una iteración automatica. si el valor de dinero llega a 30 el programa se detiene por completo


# Ejercicio_CaminataAleatoria
En este ejercicio veremos cómo hacer una simulación de una caminata aleatoria.
## Descripción
Para este ejercicio estarémos viendo de manera básica cómo se puede simular una caminata aleatoria. Imagina una caminata aleatoria, como un punto (x,y) en el plano el cuál puede moverse en el siguiente momento x+1 a los puntos y+1 o y-1 con una probabilidad p y 1-p respectivamente, es decir que va dando pasos de 1 hacia un lado u otro en cada momento basado en una probabilidad. Ahora, lo que tú tendrás que hacer es simular esto, imagina un apostador que empieza en el momento 0 con $20 y para el siguiente momento apuesta 1 de sus 20 con otra persona, si pierde, entonces en el momento 1 tendría $19, si gana, entonces tendría $21. Si suponemos que tiene el 50% de probabilidades de ganar o perder, entonces crea una gráfica donde puedas ver el resultado de esta interacción y termine hasta que el apostador se quede sin dinero o llegue a $30. Ahora repite este experimento muchas veces y responde ¿Cuántas veces llegó a cero sin que haya llegado a $30? ¿Cómo cambia tu resultado si ahora el apostador tiene 51% de probabilidades de perder?

## Bonus
Expande tu código de tal manera que ahora el movimiento aleatorio igual se vea reflejado en x (En este caso no podemos semejar este movimiento a las apuestas, pero sin embargo se parece más al movimiento de una partícula en dos dimensiones)
