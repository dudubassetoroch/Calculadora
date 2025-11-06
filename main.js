 let expressao = ""

      function calc(valor){
        expressao += valor
        document.getElementById('resultado').innerText = expressao
      }

      function calcular(){
        try{
            let resultado = eval(expressao)
            document.getElementById('resultado').innerText = expressao
            expressao = resultado
        }catch{
            document.getElementById('resultado').innerText = "Erro"
        }
        
      }

      function limpar(){
        document.getElementById('resultado').innerText = ""
        expressao = ""
      }