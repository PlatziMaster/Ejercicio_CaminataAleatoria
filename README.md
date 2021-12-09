# Ejercicio_CaminataAleatoria
En este ejercicio veremos cómo hacer una simulación de una caminata aleatoria.

## ¿Cómo ejecutarlo?

1. Abrir el siguiente link de google Colab
https://colab.research.google.com/drive/1S58jRXFk_SGM-PFW4lg1nw34yG43Z5lN?usp=sharing

2. Ejecuta cada una de los bloques de código, dando clic en play

## Descripción
Para este ejercicio estarémos viendo de manera básica cómo se puede simular una caminata aleatoria. Imagina una caminata aleatoria, como un punto (x,y) en el plano el cuál puede moverse en el siguiente momento x+1 a los puntos y+1 o y-1 con una probabilidad p y 1-p respectivamente, es decir que va dando pasos de 1 hacia un lado u otro en cada momento basado en una probabilidad. Ahora, lo que tú tendrás que hacer es simular esto, imagina un apostador que empieza en el momento 0 con $20 y para el siguiente momento apuesta 1 de sus 20 con otra persona, si pierde, entonces en el momento 1 tendría $19, si gana, entonces tendría $21. Si suponemos que tiene el 50% de probabilidades de ganar o perder, entonces crea una gráfica donde puedas ver el resultado de esta interacción y termine hasta que el apostador se quede sin dinero o llegue a $30. Ahora repite este experimento muchas veces y responde ¿Cuántas veces llegó a cero sin que haya llegado a $30? ¿Cómo cambia tu resultado si ahora el apostador tiene 51% de probabilidades de perder?

## Bonus
Expande tu código de tal manera que ahora el movimiento aleatorio igual se vea reflejado en x (En este caso no podemos semejar este movimiento a las apuestas, pero sin embargo se parece más al movimiento de una partícula en dos dimensiones)
