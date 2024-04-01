//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

//exibir uma mensagem na tela
alert('Bem vindo ao jogo da pontuação!');

//guardar o valor da variável e perguntar alguma coisa ao usuário
pontuação = prompt('Digite uma pontuação:');

//estrutura de condição
if(pontuação >=  100)
    {
        alert('Parabéns! Você alcançou a pontuação necessária.');
    }
    else
        {
            alert('Tente novamente para ganhar.');
        }