Falamos com o time responsável pelo seu processo, e foram passados foram os seguintes pontos em relação ao seu teste:

Construção de interface:

-   Fluxo de exceções poderia ter sido melhor explorado e os campos da tela de login estão sem validações.
-   Campo de inserção/edição de post:
-   Não expande, tornando a usabilidade de criação/edição de texto difícil.
-   Feedback da edição de post está faltando, apenas colocando o texto no mesmo campo de criação.
-   Digitando 280 caracteres o botão de envio é desabilitado.
-   Contador de caracteres não atualiza ao clicar em editar - apenas quando é digitado algo.
-   Textos do app contém inglês e português misturados.
-   Área inicial com nome diferente da App Bar. (inicial/news).
-   Responsividade do app poderia estar melhor
-   a lista está conflitando com a navegação do SO. (possui safe area na área inicial e não possui na área de notícias).
    OK - Nomes de ScrollViewVK e ColVK estão declaradas como "AlertVK".
    Foi feito - Poderia ter criado uma interface para a definição de cores.
    OK - Alguns componentes estão utilizando cores hard-coded, mesmo tendo as mesmas no tema.
-   Estilização dos componentes não é reaproveitado, dificultando a mudança de layout.
-   Strings descentralizadas.
-   Feedback de loading não utilizado.
-   Teclado fica por cima da interface.
-   Teclado não fecha sozinho e o botão de ação apenas o fecha
-   não focando em outro campo e nem realizando ações.
-   Ao clicar fora do teclado, o mesmo apenas se fecha
-   não deixando a interface funcionar.
-   Campos de senha não tem a opção de remover/aplicar o obscure text
-   tornando a interface menos acessível.
-   Dark mode foi implementado incorretamente, prejudicando a acessibilidade e usabilidade.
-   Ao utilizar o aplicativo com fontes maiores, o layout quebra em algumas partes.
    Testes:
-   Poderia ter sido explorado melhor, as unidades não estão testadas e os três arquivos criados não cobrem nenhum caso de teste, e também não estão funcionando. Arquitetura (MVVM, Clean Architecture, Redux, MVC etc)
-   Atomic Design mal aplicado, poderia ter sido explorado melhor e seguido a teoria da mesma. Boas práticas (Clean Code, SOLID, etc)
-   Não reutilização de código ao pegar as configurações da API.
-   Utilização de undefined para inicialização de variáveis.
-   Poderia ter explorado melhor os conceitos de SOLID.
-   Reutilização de código num geral poderia ter sido melhor explorada.
    Segurança:
-   Vulnerabilidade de segurança ao deixar um post para editar e logar com outro usuário, permitindo reescrever o post.
-   Vulnerabilidade de segurança ao utilizar o hash do email para consulta do gravatar
-   possibilitando SQL Injection, etc.
-   Vulnerabilidade de segurança ao inicializar um usuário admin no código.
    Extras:
-   Boa documentação realizada no README.

Esperamos que esse feedback tenha sido agregador para a sua jornada. Conte conosco para o que precisar! (
