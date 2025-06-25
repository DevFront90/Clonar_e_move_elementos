Clonar e Mover Elementos 🔄
Projeto demonstrativo de manipulação DOM usando jQuery para clonar e mover elementos entre containers.
📋 Descrição
Este projeto demonstra diferentes técnicas de manipulação de elementos HTML usando jQuery, incluindo:

Clonagem de elementos
Movimentação de elementos entre containers
Manipulação de conteúdo HTML
Uso de seletores jQuery

🚀 Como Clonar o Projeto
Pré-requisitos

Git instalado em sua máquina
Navegador web moderno
Editor de código (recomendado: VS Code)

Clonando o Repositório
bash# Clonar o repositório
git clone https://github.com/DevFront90/Clonar_e_move_elementos.git

# Entrar na pasta do projeto
cd Clonar_e_move_elementos

# Abrir no VS Code (opcional)
code .
Executando o Projeto

Abra o arquivo index.html no seu navegador
Ou use uma extensão como Live Server no VS Code para desenvolvimento local

🛠️ Tecnologias Utilizadas

HTML5 - Estrutura da página
CSS3 - Estilização
JavaScript - Lógica de programação
jQuery - Manipulação DOM simplificada

📁 Estrutura do Projeto
Clonar_e_move_elementos/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos do projeto
├── js/
│   └── script.js      # Scripts jQuery
└── README.md          # Documentação
🔧 Funcionalidades
1. Clonagem de Elementos
javascript// Clona o elemento .texto de dentro de #sourcer
var el = $('#sourcer .texto').clone();
2. Inserção de Conteúdo
javascript// Insere apenas o HTML interno do elemento clonado
$('#container').html(el.html());
3. Adição de Elementos
javascript// Adiciona o elemento clonado completo ao container
el.appendTo('#container');
4. Movimentação de Elementos
javascript// Move o elemento original para o novo container
$('#sourcer .texto').appendTo('#container');
📖 Como Funciona
Fluxo de Execução

Clonagem: O elemento .texto dentro de #sourcer é clonado
Inserção de Conteúdo: O conteúdo HTML interno é inserido em #container
Adição do Clone: O elemento clonado completo é adicionado ao container
Movimentação: O elemento original é movido de #sourcer para #container

Resultado Final
O container #container conterá:

O conteúdo HTML interno do elemento original
Uma cópia completa do elemento
O elemento original (movido de sua posição inicial)

🎯 Métodos jQuery Utilizados
MétodoDescriçãoclone()Cria uma cópia do elemento selecionadohtml()Obtém ou define o conteúdo HTML internoappendTo()Adiciona elementos ao final do elemento alvo$(function())Executa código após o DOM estar carregado
🔄 Casos de Uso
Este projeto é útil para entender:

Manipulação dinâmica de elementos HTML
Diferença entre clonar e mover elementos
Uso prático de métodos jQuery
Organização de elementos na página
