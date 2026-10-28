# HiperTracker

## O que o app faz
O HiperTracker é uma aplicação web minimalista focada no registo diário de hábitos, refeições e suplementos. Funciona através de um campo de entrada, um botão e uma área de resultados. O utilizador pode adicionar tarefas (com validação para evitar campos em branco), marcá-las como concluídas com um clique ou removê-las da lista. A aplicação pertence à Trilha C (sem API), guardando os dados no `localStorage` do navegador para que não se percam ao recarregar a página.

## Como rodar o projeto
1. Clone o repositório na sua máquina.
2. Abra o diretório no VS Code e ative a extensão **Live Server**.
3. Em alternativa, abra o terminal no diretório do projeto e corra `python -m http.server 8000`, acedendo a `http://localhost:8000` no seu navegador.

## Uso de IA
- **Ferramenta:** Google Gemini.
- **Para quê:** A Inteligência Artificial foi utilizada para definir o âmbito do projeto (na Etapa 1) e redigir o código base em HTML, CSS e JavaScript (na Etapa 2). Todo o código gerado garante boas práticas como o uso de HTML semântico, inserção de dados com `textContent` (prevenindo vulnerabilidades) e a implementação de comentários nas funções. Todo o output foi lido e o funcionamento verificado no navegador local.

