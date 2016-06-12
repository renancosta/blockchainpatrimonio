# Blockchain - Sistema de Patrimonio
A aplicabilidade do blockchain nesse domínio primeiramente é a transparência da transação do patrimônio que possibilitaria uma melhor verificação da distribuição de bens e auditoria por todos o que evitaria o beneficiamento de setores a fim de privilégios. Com o uso dessa estrutura os servidores ou setores, poderiam realizar a troca de patrimônios para adequar seus ambientes de forma mais rápida e sem passar por um centralizador que pode atrasar o processo devido a acumulo de trabalho. A transparência dos patrimônios também ajudaria a verificação do que cada servidor tem em sua carga o que possibilitaria melhor gerenciamento pelo mesmo.

## Instruções de execução

Para executar o projeto é necessário estar com o seguinte ambiente especificado abaixo. Os comandos devem ser preferencialmente executados em ordem e caso já possua instalado qualquer dos itens basta passar para o próximo.

###Ambiente necessário para execução do projeto

####NodeJS
  sudo apt-get install nodejs
  sudo apt-get install nodejs-legacy

####Ethereum
  sudo apt-get install software-properties-common
  sudo add-apt-repository -y ppa:ethereum/ethereum
  sudo add-apt-repository -y ppa:ethereum/ethereum-dev
  sudo apt-get update
  sudo apt-get install ethereum

####NPM
  sudo apt-get install npm

####GIT
  sudo apt-get install git (Necessário para a próxima ferramenta)

####Truffle  
  sudo npm install -g truffle

####Testrpc  
  sudo npm install -g ethereumjs-testrpc 

###Comandos que poderá auxiliar caso apareça problemas
  node –v (Verifica a versão do node, é útil para verificar se a instalação ocorreu correto e o node está referenciado)
  npm cache clean (Limpa o cache do npm, caso já o tenha instalado)

###Comandos de execução após ambiente instalado
  1. Em um terminal execute o comando
      testrpc
  2. Em outro terminal vá até a pasta do projeto baixado e execute
      truffle serve
  3. Abra um browser e digite
      localhost:8080
