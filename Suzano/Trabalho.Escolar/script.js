window.onload = function () {

  /***Corpo do paint - canvas ***/
    
    var canvas = document.getElementById("canvaspintor");
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    var isDrawing = false;
  
  
     /*** Tabela de Cores ***/

    var colors = document.getElementsByClassName('cor')[0];
  
    colors.addEventListener('click', function(event) {
      context.strokeStyle = event.target.value || 'black';
    });
  
            /*** Tabela de linhas do pincel ***/

    var brushes = document.getElementsByClassName('linhastabela')[0];
  
    brushes.addEventListener('click', function(event) {
      context.lineWidth = event.target.value || 1;
    });
  
        /*** Faz o pincel desenhar ***/

    canvas.addEventListener('mousedown', function(event) {
      setMouseCoordinates(event);
      isDrawing = true;
      context.beginPath();
      context.moveTo(mouseX, mouseY);
    });
  
    /*** Movimentação do pincel para  ***/
    
    canvas.addEventListener('mousemove', function(event) {
      setMouseCoordinates(event);
  
      if(isDrawing){
        context.lineTo(mouseX, mouseY);
        context.stroke();
      }
    });
  
    /*** Movimentação da linha ao cliclar na tela  ***/
    
    canvas.addEventListener('mouseup', function(event) {
      setMouseCoordinates(event);
      isDrawing = false;
    });
  
     /*** Cordenadas do ponto x - y da tabela  ***/

    function setMouseCoordinates(event) {
      mouseX = event.clientX - boundings.left;
      mouseY = event.clientY - boundings.top;
    }
  
    /*** Limpar todos os pixels ***/

    var clearButton = document.getElementById('Limpar');
  
    clearButton.addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  
   };
  



  
  