# Finance-CRUD

Um projeto simples e minimalista de CRUD (Create, Read, Update, Delete) para gerenciar finanças pessoais, desenvolvido com **Vite**, **TypeScript**, **Sass** e React.

## 📋 Funcionalidades

- Adicionar novas transações financeiras (descrição, valor e data).
- Editar transações existentes.
- Excluir transações.
- Lista de transações exibida de forma responsiva e estilizada.

## 🛠️ Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Build rápido para desenvolvimento front-end.
- [React](https://reactjs.org/) - Biblioteca para criação de interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript com tipagem estática.
- [Sass](https://sass-lang.com/) - Pré-processador CSS para estilos mais organizados.
- [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) - Ferramentas para padronização de código.

### 📚 O Que Aprendi Sobre CRUD

Durante o desenvolvimento deste projeto, adquiri conhecimentos sobre a implementação de um fluxo CRUD (Create, Read, Update, Delete).

#### **1. Estruturação do Fluxo de Dados**
- Compreendi como estruturar os dados no estado local usando React.
- Aprendi a utilizar funções para manipular o estado, como adicionar, atualizar e excluir itens.

#### **2. Criação de Itens (Create)**
- Desenvolvi formulários dinâmicos para coletar informações do usuário e criar novos registros.
- Usei eventos de formulário (`onSubmit`) para capturar os dados e adicioná-los à lista de itens no estado.

#### **3. Leitura de Dados (Read)**
- Implementei a exibição dos dados em uma lista, garantindo que eles fossem renderizados dinamicamente com base no estado.
- Aprendi a formatar os dados para que fossem claros e organizados para o usuário.

#### **4. Atualização de Itens (Update)**
- Modelei a lógica para editar registros existentes, reutilizando o formulário de criação com valores iniciais pré-preenchidos.
- Entendi como identificar itens no estado usando IDs únicos e atualizá-los de maneira imutável.

#### **5. Exclusão de Itens (Delete)**
- Implementei a funcionalidade para remover itens da lista, atualizando o estado local sem afetar os demais registros.
- Aprendi a importância de confirmar ações críticas, como exclusões, para evitar erros do usuário (não implementado neste projeto, mas algo a considerar).

#### **6. Experiência do Usuário no CRUD**
- Ajustei o fluxo de edição e exclusão para serem intuitivos, com botões de ação fáceis de localizar e usar.
- Percebi como pequenas melhorias na interface podem impactar positivamente a usabilidade.
