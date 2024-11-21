# Jogo da Velha com TypeScript

Este é um projeto simples de **Jogo da Velha (Tic Tac Toe)** desenvolvido com **TypeScript** e manipulação direta do DOM. O objetivo é proporcionar uma experiência básica de jogo enquanto demonstra o uso de **TypeScript** para tipagem e organização do código.

![Tic_Tac_Toe](https://github.com/user-attachments/assets/b87639b2-3d41-4e9a-ad48-79170e74c32e)

## Funcionalidades

- Dois jogadores alternam entre os símbolos **X** e **O**.
- Verificação automática de vitória para ambos os jogadores.
- Reinício do jogo ao término, com mensagens de vitória exibidas para o jogador vencedor.
- Estrutura organizada utilizando **interfaces** para melhor gerenciamento de estados.

## Tecnologias Utilizadas

- **TypeScript**: Usado para tipar os elementos do DOM e estruturar os dados do jogo.
- **HTML e CSS**: Para a interface do jogo.
- **JavaScript**: Manipulação do DOM e lógica do jogo.

## Código Principal

O projeto utiliza:
- Uma interface `Game` para definir os estados do jogo.
- Tipagem explícita para elementos DOM usando **TypeScript**.
- Um array de combinações vencedoras para validar as condições de vitória.

### Destaques do Código

#### Tipagem de Elementos do DOM
```typescript
const boxgame = document.querySelector(".boxgame") as HTMLDivElement;
const btngame = document.querySelectorAll(".boxgame button") as NodeListOf<HTMLButtonElement>;
