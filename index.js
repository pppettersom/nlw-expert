const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x;",
        "let x;",
        "const x;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento de Operações Múltiplas",
        "Modelo de Objeto do Documento",
        "Diretório de Operações Móveis"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para concatenar arrays em JavaScript?",
      respostas: [
        "join()",
        "merge()",
        "concat()"
      ],
      correta: 2
    },
    {
      pergunta: "O que significa a sigla AJAX em JavaScript?",
      respostas: [
        "Asynchronous JavaScript and XML",
        "All JavaScript and XML",
        "Advanced JavaScript and XML"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é utilizado para verificar igualdade estrita em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevação de balões",
        "Içamento de peso",
        "Elevação de variáveis"
      ],
      correta: 2
    },
    {
      pergunta: "Como se referencia um elemento HTML pelo ID em JavaScript?",
      respostas: [
        "getElementByClass()",
        "selectElementByID()",
        "getElementById()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseNumber()",
        "parseInt()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função anônima em JavaScript?",
      respostas: [
        "Uma função sem nome",
        "Uma função secreta",
        "Uma função misteriosa"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Filtra os elementos do array",
        "Mapeia os elementos aplicando uma função",
        "Inverte a ordem dos elementos"
      ],
      correta: 1
    }
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    //mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    //laço de repetição
      for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
  
         corretas.delete(item)
         if(estaCorreta){
           corretas.add(item)
         }
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        
        quizItem.querySelector('dl').appendChild(dt)
  
      }
      quizItem.querySelector('dl dt').remove()
      
      
      
      
      
      
      quiz.appendChild(quizItem)
  
      }