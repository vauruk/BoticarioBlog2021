# BoticarioBlog2021

## Libs Utilizadas
 **[Node 16.0.0](https://nodejs.org/en/).**
 
 **[React Native 0.64.0](https://reactnative.dev/)**
 
 **[React Navigation 5](https://reactnavigation.org/blog/2020/02/06/react-navigation-5.0/)**
 
 **[Redux ToolKit 1.5.1](https://redux-toolkit.js.org/)**
 
 **[Styled Component 5.2.3](https://styled-components.com/)**
 
 **[react-native-vector-icons 8.1.0](https://github.com/oblador/react-native-vector-icons)**
 
 **[TypeScript 3.8.3](https://www.typescriptlang.org/docs/)**
 
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


#Antes de rodar o projeto

`yarn && npx pod-install`
