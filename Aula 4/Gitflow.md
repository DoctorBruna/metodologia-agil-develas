# Gitflow
teste-1
o objetivo do Git Flow era melhorar as organizações das Branches (ramificações) dentro de repositórios e, desta forma, dar mais fluidez ao processo de desenvolvimento de novas funcionalidades, correções de bugs e lançamentos de versões.

## Quando utilizar o Git Flow?
O Git Flow é recomendado para projetos que utilizam versionamento semântico (semantic versioning) ou que precisam oferecer suporte a várias versões de seu software.

Segundo o próprio autor, Vincent Driessen, se o projeto exige entrega contínua, como normalmente ocorre em projetos, este modelo não é recomendado para esse tipo de cenário. Porque geralmente com o Git Flow são geradas branches de longa duração e branches de longa duração atrapalham a entrega contínua.

A utilização do Git Flow também se torna recomendado para projetos que existam uma grande quantidade de pessoas “commitando” dentro de um repositório, ou para projetos que possuem um ciclo de entrega agendada.

## Como funciona?
O Git Flow trabalha com duas branches principais, a Develop e a Master, que duram para sempre; e três branches de suporte, Feature, Release e Hotfix, que são temporários e duram até realizar o merge com as branches principais.

Então, ao invés de uma única branch Master, esse fluxo de trabalho utiliza duas branches principais para registrar o histórico do projeto. A branch Master armazena o histórico do lançamento oficial, e a branch Develop serve como uma ramificação de integração para recursos.

É ideal que todos os commits na branch Master sejam marcados com um número de versão. Na imagem abaixo, vemos como é a estrutura do fluxo do Git Flow:

Diagrama que representa o fluxo do Git Flow. O diagrama é colorido em cinco cores, sendo elas: azul turquesa (Feature), verde-marinho (Develop), verde-claro (Release), vermelho (Hotflix) e amarelo (Master), e contém cinco retângulos, coloridos, que representam as branches utilizadas no Git Flow. Além disso, o diagrama possui grafos interligados por linhas e flechas que representam a linha do tempo de commits feitos em cada branch e a relação entre eles. O diagrama também contém grafos com versões de software, esses, ligados com a branch master e interligados com commits das branches Hotfix, Develop e Release.

### Branch Master/Main
Principal branch, aqui é onde temos todo o código de produção. Todas as novas funcionalidades que estão sendo desenvolvidas, em algum momento, serão mescladas ou associadas a Master. As formas de interagir com essa branch são através de uma Hotfix ou de uma nova Release.

### Branch Develop
É a branch onde fica o código do próximo deploy. Ela serve como uma linha do tempo com os últimos desenvolvimentos, isso significa que ela possui funcionalidades que ainda não foram publicadas e que posteriormente vão ser associadas com a branch Master.

### Branch Feature
São branches utilizadas para o desenvolvimento de funcionalidades específicas. É recomendável que essas branches sigam uma convenção de nome, a convenção mais utilizada é iniciar o nome das branches com feature, por exemplo, “feature/alura-forum”.

É importante saber que essas features branches são criadas sempre a partir da branch Develop. Portanto, quando finalizada, elas são removidas após realizar o merge com a Branch Develop. Se tivermos dez funcionalidades a serem desenvolvidas, criaremos dez branches independentes.

É importante salientar que as branches de features não podem ter interação com a branch master, apenas com a branch develop.

### Branch Hotfix
É uma branch criada a partir da master para realizar correções imediatas encontradas no sistema em produção. Quando concluída, ela é excluída após realizar o merge com as branches Master e Develop.

Temos uma branch de hotfix para cada hotfix que precisamos implementar!

A grande diferença entre Feature Branches e Branches de Hotfix é que os Hotfix são criados a partir da Branch Master e quando os finalizamos, eles são mesclados tanto na Branch Master quanto na branch de desenvolvimento. Isso ocorre porque o bug está em ambos os ambientes.

Além disso, quando fechamos um Hotfix Branch, temos que criar uma tag com a nova versão do projeto. Isso porque cada mudança que fazemos na Branch Master precisa de uma tag que a represente.

### Branch Release
Uma vez que uma etapa de desenvolvimento esteja concluída, teremos em nossa Branch Develop todas as features e Hotfix mesclados. Então, se quisermos ter todas essas novas funcionalidades na Branch Master, teremos que criar uma Branch de Release.

A Branch Release serve como ponte para fazer o merge da Develop para a Master. Ela funciona como ambiente de homologação e é removida após realizar os testes do merge com a Master. Caso seja encontrado algum bug e haja alguma alteração, ela também deve ser sincronizada com a Develop.

Por fim, quando fechamos uma Branch Release, temos que criar uma tag com a nova versão de lançamento do software, para que possamos ter um histórico completo do desenvolvimento.

As bases conceituais do Git Flow são essas. Então, agora, vamos ver como implementar esse fluxo de trabalho na vida real?

## Implementação do Git Flow
Existem duas formas de implementar o Git Flow, a primeira é utilizar os comandos básicos do Git, a outra é utilizar uma CLI que ajuda a simplificar o fluxo do Git Flow. A título de curiosidade, veremos como implementar o Git Flow utilizando as duas formas.

Para instalar a CLI do Git Flow, escolha uma opção de acordo com seu sistema operacional:

OSX: brew install git-flow
Linux: apt install git-flow
Windows: https://git-scm.com/download/win → Já está incluído no Git a partir da versão 2.5.3.

### Iniciando o Git Flow
A primeira coisa que temos que fazer é criar uma Branch Develop a partir da Branch Master. Para isso, utilize:

Com comando básico do Git:

#### git checkout -b develop
Com a CLI do Git-flow:

git flow init
A execução deste comando na CLI talvez fará algumas perguntas. Responda tudo afirmativamente e sua Branch Develop será criada.

#### Branch Feature
##### Criação de uma feature
Com comandos básicos do Git:

git checkout develop
git checkout -b name-feature
Com a CLI do Git-flow:

git flow feature start name-feature
##### Finalização de uma feature
Com comandos básicos do Git:

git checkout develop
git merge name-feature
Com a CLI do Git-flow:

git flow feature finish name-feature
#### Branch Hotfix
##### Criação de um Hotfix
Com comandos básicos do Git:

git checkout master
git checkout -b name-hotfix
Com a CLI do Git-flow:

git flow hotfix start name-hotfix
##### Finalização de um Hotfix
Com comandos básicos do Git:

git checkout master
git merge name-hotfix
git checkout develop
git merge name-hotfix
git tag name-hotfix
Com a CLI do Git-flow:

git flow hotfix finish name-hotfix
Aqui podemos ver o quão útil é a CLI do Git-flow, pois simplifica o processo e nos ajuda a não cometer erros.

#### Branch Release
##### Criação de uma Release
Com comandos básicos do Git:

git checkout develop
git checkout -b release/1.0.0
Com a CLI do Git-flow:

git flow release start 1.0.0
##### Finalização de uma Release
Com comandos básicos do Git:

git checkout master
git merge release/1.0.0
git checkout develop
git merge release/1.0.0
git tag 1.0.0
Com a CLI do Git-flow:

git flow release finish 1.0.0

Pronto, agora sabemos como utilizar os comandos do Git e a CLI git-flow para aplicarmos o Git Flow na prática!

### Benefícios do Git Flow
#### Desenvolvimento Paralelo
Uma das grandes vantagens do Git Flow é que ele torna o desenvolvimento paralelo muito simples, isolando o novo desenvolvimento do trabalho finalizado.

O novo desenvolvimento (como novas funcionalidades e correções de bugs não emergenciais) é feito em Branches de features e só é mesclado de volta ao corpo principal do código quando as pessoas desenvolvedoras estão seguras de que o código está pronto para lançamento.

Outro ponto, é que se você for solicitado a alternar de uma tarefa para outra, tudo o que você precisa fazer é confirmar suas alterações e, em seguida, criar uma nova Branch de feature para sua nova tarefa. Quando essa tarefa estiver concluída, basta fazer o checkout da branch e continuar de onde parou a outra tarefa.

#### Colaboração
As branches de feature também facilitam a colaboração de duas ou mais pessoas desenvolvedoras em uma mesma tarefa, porque cada branch é uma caixa de proteção onde as únicas alterações que ocorreram são as que aconteceram para realizar a tarefa.

Com isso, conseguimos compartilhar nossa branch com outras pessoas para elas nos ajudarem ou terminarem a tarefa. Isso também torna muito fácil de ver e acompanhar o que cada pessoa está fazendo em um projeto.

#### Área de preparação
Mais conhecida como a branch develop, com ela é possível ter um local onde podemos testar todas as nossas novas features, isso sem se preocupar se estamos ou não em produção.

#### Suporte para correções de emergência
Com o suporte a branches de hotfix se torna possível realizar alterações de emergência sem preocupações, sabendo que o hotfix conterá apenas a correção. Não há risco de você acidentalmente mesclar um código que não deveria, pois tudo está devidamente separado.

Mas como nem tudo são flores, agora que vimos os benefícios do Git Flow, vamos ficar por dentro também das desvantagens de utilizar essa abordagem.

### Desvantagens do Git Flow
O fluxo e os processos do Git Flow são complexos, além de serem muitos, dependendo da complexidade do projeto ao qual esteja trabalhando, a estrutura do Git Flow pode tornar o processo ainda mais complicado e o desenvolvimento ainda mais lento, pois pense o quão complicado é controlar um repositório onde temos alterações ocorrendo a todo minuto em diversas branches.

Além disso, por violar a regra de branches de curta duração, por conta do ciclo de desenvolvimento longo, o Git Flow não consegue se adaptar bem com o DevOps, mais especificamente com a integração e implantação contínua.

A quantidade de branches que são criadas com o Git Flow e que podem ter diferentes tempos de vida, aumentam potencialmente os conhecidos conflitos do Git na hora do merge.Outro ponto é que se você utilizar o Git Flow, o comando rebase do Git terá que ser esquecido, pois não poderá ser utilizado.

Por esses motivos, se estiver trabalhando em uma startup, onde você pode ter que lançar várias features em um dia; gitflow não é bom para você.
