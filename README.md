# BoticarioBlog2021

## Descrição funcionalidades

Design escolhido limpo e com cor predominando branco e outras cores usando a paleta de cores da Logo Utilizada

- Tela de splash screen com informações sobre você, fique à vontade pra
apresentar seu nome, e-mail uma foto divertida sua. Mas se quiser só
colocar uma logo do seu produto, tá valendo ;)
 ```
 Concluído com conforme descrito
 ```
- Tela de login para informar e-mail e senha;
 ```
 Concluído com conforme descrito
 ```
- Tela de cadastro de um novo usuário solicitando nome, e-mail e senha;
 ```
 Concluído com conforme descrito
 ```
- Tela para listar postagens de até 280 caracteres, exibindo nome da pessoa que
postou, data do post e texto do post;
 ```
 Concluído com conforme descrito
 ```
- Tela para listar as últimas novidades do Boticário.
 ```
 Concluído com conforme descrito
 ```
- Tela para fazer um novo post solicitando apenas um campo de texto;
 ```
 Concluído com conforme descrito, mas eu deixei na mma tela que temos as postagens, 
 melhoria o qual nao deu tempo de implementar que eu imaginei 
 seria um campo ocultavel, ou uma modal para add um post novo e 
 colocar um botao plus do lado direito no header da tela para adicionar novos posts.
 
 ```
- Possibilidade de editar e excluir um post próprio que foi publicado.
 ```
 Concluído com conforme descrito
 ```
- Ao logar no app, na tela pela vez deverá trazer alguns posts (fake) de seus
colegas;
 ```
 Concluído com conforme descrito, registros que outras pessoas nao logadas no App nao pode ser excluidos ou editados, e o post da pessoa logada se destaca por uma cor difente de fundo
 ```
 
 - Tests unitários tive problema com os testes unitários, incompatibilidade de com o vector-icons (resolvido), mas com outros problemas que devido ao tempo para entrega do app não consegui concluir e executar testes mais elaborados

## App Screen
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 39 05](https://user-images.githubusercontent.com/12579082/118005582-e2c7c380-b320-11eb-9646-54b5892ead97.png)
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 39 12](https://user-images.githubusercontent.com/12579082/118005588-e3605a00-b320-11eb-9b73-44ecad75fee9.png)
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 48 30](https://user-images.githubusercontent.com/12579082/118005557-dfccd300-b320-11eb-81c3-c5dc676a8c1a.png)
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 38 56](https://user-images.githubusercontent.com/12579082/118005562-e0fe0000-b320-11eb-9616-d4c0065403de.png)
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 39 02](https://user-images.githubusercontent.com/12579082/118005579-e22f2d00-b320-11eb-8dd8-6c4380e7e4c3.png)
![Simulator Screen Shot - iPhone 12 - 2021-05-12 at 12 38 58](https://user-images.githubusercontent.com/12579082/118005567-e1969680-b320-11eb-9ca8-9786a3943980.png)

## Libs Utilizadas
 **[Node 16.0.0](https://nodejs.org/en/).**
 
 **[React Native 0.64.0](https://reactnative.dev/)**
 
 **[React Navigation 5](https://reactnavigation.org/blog/2020/02/06/react-navigation-5.0/)**
 
 **[Redux ToolKit 1.5.1](https://redux-toolkit.js.org/)**
 
 **[Styled Component 5.2.3](https://styled-components.com/)**
 
 **[react-native-vector-icons 8.1.0](https://github.com/oblador/react-native-vector-icons)**
 
 **[TypeScript 3.8.3](https://www.typescriptlang.org/docs/)**
 
 **[Prettier](https://prettier.io/docs/en/index.html)**
 
 **[Prettier](https://prettier.io/docs/en/index.html)**
 
 ## Patterns usados
 **Estrutura de componentes baseado em:**
 
 **[Atomic Design]( https://medium.com/engineering-zemoso/atomic-design-in-react-react-native-using-a-theming-library-part-1-4fc2e0e2ccc8)**
  
 
 **Para montar estrutura de redux usado:**
 
 **[Ducks pattern]( https://github.com/erikras/ducks-modular-redux)**
  

#### Estrutura de pastas e uma explicação sucinta:

```
Descrição da disposição da arquitetura, foi utilizado a sufixo VK - sigla de Vauruk

+---src
    +---assets --> ficam as imagems design necessárias para o projeto
    +---components --> ficam os componentes principais 
    ¦   +---AlertVK 
    ¦       +---index.tsx --> (fica os componentes do componente)
    ¦       +---styles.ts --> (contem estilos para os componentes utilizados nas telas)
    ¦       +---types.tsx --> (tipos relacionados a tela)
    ¦   +---ColVK
    ¦   +---ContainerVK
    ¦   +---ImageVK
    ¦   +---RowVK
    ¦   +---ScrollViewVK
    ¦   +---index.ts - centralizador dos componentes para expor para o restante da arquitetura 
    +---config --> fica centralizado os arquivos de configuração, atualmente utilizando somente .env
    +---hooks --> fica centralizados hooks (componentes stateless)
    +---routes --> routes sao dividos por dominios (Logado e Nao Logado) - centralizados no Root
    ¦   +---Home
    ¦   +---Root
    ¦   +---SideBar
    ¦   +---SignIn
    ¦   +---intex.ts
    ¦   +---routes.tsx
    ¦   +---types.ts
    +---services
    ¦   +---blog
    ¦   +---login
    ¦   +---ApiVK.ts --> Generalização Axios (nesse ponto eu posso trocar a API de acesso a rest ou qualquer resultado de serviços)
    ¦   +---types.ts
    +---store (config Redux)
    ¦   +---blog
    ¦   +---reducers
    ¦   +---common --> contem types em comum entre os reducers
    ¦   +---login
    ¦   +---register
    ¦   +---index.ts
    +---theme (centraliza o theme para o styled-component)
    +---views (local definido para as screens dos projetos)
    ¦   +---Home
    ¦       +---index.tsx --> (fica os componentes de tela)
    ¦       +---styles.ts --> (contem estilos para os componentes utilizados nas telas)
    ¦       +---types.tsx --> (tipos relacionados a tela)
    ¦   +---Register
    ¦   +---SignIn
    ¦   +---index.ts
    
```


## Rodando o projeto 
### Versões utilizadas:

React Native: 0.64.0

Xcode: 12.5

Android Studio: 4.2 

Java: 15


Reconstruir strutura run `yarn clean && yarn pod` or `yarn && npx pod-install`, mas o script de clean faz algums procedimentos que auxiliam
a iniciar o projeto sem cache no computador que ira executar

- Run iOS: `yarn ios`
- Run Android: `yarn android`
- Run test: `yarn test`
- Run ts: `yarn ts:compile` - validar tipagem no TS

## Distro
- Foi criado uma pasta na raiz do projeto com um APK para testes:
- `/dist/BoticarioBlog2021-v1.0.2.apk`


