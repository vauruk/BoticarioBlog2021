# BoticarioBlog2021

## 

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


#Antes de rodar o projeto

`yarn && npx pod-install`
