var parametros = [];
var valores = [];
var saveEndPoint = [];
var won = [];
var loser = [];
var random = 0;
var inicio = 20;




function  enteroAleatorio () {
    random= 1 + Math.floor(Math.random()*2)
    return random ;
    
};
function addOrLess() {
    if(random === 1) {
        valores.push(inicio++)
    } else if (random === 2) {
        valores.push(inicio--)
    };
};



function showGraph () {

    won = [];
    loser = [];
    var i = 0;


    do {
        enteroAleatorio();
        addOrLess();
        parametros.push(i++);
        
    } while (inicio >= 0 && inicio < 31);

            if (inicio = (30 || 0)){
                saveEndPoint.push(i-1)
            }

            valores.map((e) => {
       

                if (e===30) {
                    won.push(e)  
                } else if (e===0) {
                    loser.push(e)
                }
                

            })

            var data = [{
                x: parametros,
                y: valores,
                type: "linear"
              }];
              Plotly.newPlot("grafico",data);
}

function graficar(){
     
    for (let i = 0; i < document.getElementById('num-caminatas').value; i++) {
        showGraph()
        inicio=20;
    } 

}


function calcPromedio() {

     
    var suma = saveEndPoint.reduce((anterior, actual) => {
        return (anterior +actual)/saveEndPoint.length;
    });
    
    document.getElementById('promedio').value = suma;
    document.getElementById('ganadas').value = won.length;
    document.getElementById('perdidas').value = loser.length;

}


   
    








