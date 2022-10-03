# Clean Code
Clean Code ou código limpo se refere a um conjunto de boas práticas na escrita de software que você pode aplicar para obter uma maior legibilidade e manutenabilidade do seu código.

## 1 – Nomes são muito importantes
A definição de nome é essencial para o bom entendimento de um código. Aqui, não importa o tipo de nome, seja ele:

- Variável;
- Função;
- Parâmetro;
- Classe;
- Método.

Ao definir um nome, é preciso ter em mente 2 pontos principais:

- Ele deve ser preciso e passar logo de cara sua ideia central. Ou seja, deve ir direto ao ponto;
- Não se deve ter medo de nomes grandes. Se a sua função ou parâmetro precisa de um nome extenso para demonstrar o que realmente representa, é o que deve ser feito.
  
## 2 – Regra do escoteiro
Há um princípio do escotismo que diz que, uma vez que você sai da área em que está acampando, você deve deixá-la mais limpa do que quando a encontrou.

Trazendo a regra para o mundo da programação, a regra significa deixar o código mais limpo do que estava antes de mexer nele.

## 3 – Seja o verdadeiro autor do código
O ser humano é acostumado a pensar de forma narrativa , portanto, o código funciona da mesma forma. Logo, ele é uma história e, como os programadores são seus autores, precisam se preocupar na maneira com que ela será contada.

Em resumo, para estruturar um código limpo, é necessário criar funções simples, claras e pequenas. Existem 2 regras para criar a narrativa via código:

As funções precisam ser pequenas;
Elas têm de ser ainda menores.
Não confunda com os termos “nome” e “função”. Como dissemos no primeiro princípio, nomes grandes não são um problema. Já as funções precisam ser as menores possíveis.

## 4 – DRY (Don’t Repeat Yourself)
Esse princípio pode ser traduzido como “não repita a si mesmo”. Essa expressão foi descrita pela primeira vez em um livro chamado The Pragmatic Programmer e se aplica a diversas áreas de desenvolvimento, como:

Banco de Dados;
Testes;
Documentação;
Codificação.
O DRY diz que cada pedaço do conhecimento de um sistema deve ter uma representação única e ser totalmente livre de ambiguidades. Em outras palavras, define que não pode existir duas partes do programa que desempenhem a mesma função.

## 5 – Comente apenas o necessário
Esse princípio afirma que comentários podem ser feitos, porém, se forem realmente necessários. Segundo Uncle Bob, os comentários mentem. E isso tem uma explicação lógica.

O que ocorre é que, enquanto os códigos são constantemente modificados, os comentários não. Eles são esquecidos e, portanto, deixam de retratar a funcionalidade real dos códigos.

Logo, se for para comentar, que seja somente o necessário e que seja revisado juntamente com o código que o acompanha.

## 6 – Tratamento de erros
Tem uma frase do autor Michael Feathers, muito conhecido na área de desenvolvimento, que diz que as coisas podem dar errado, mas, quando isso ocorre, os programadores são os responsáveis por garantir que o código continuará fazendo o que precisa.

Ou seja: saber tratar as exceções de forma correta é um grande e importante passo para um programador em desenvolvimento.

## 7 – Testes limpos
Testar, na área de programação, é uma etapa muito importante. Afinal, um código só é considerado limpo após ser validado através de testes – que também devem ser limpos.

Por isso, ele deve seguir algumas regras, como:

- Fast: O teste deve ser rápido, permitindo que seja realizado várias vezes e a todo momento;
- Independent: Ele deve ser independente, a fim de evitar que cause efeito cascata quando da ocorrência de uma falha – o que dificulta a análise dos problemas;
- Repeatable: Deve permitir a repetição do teste diversas vezes e em ambientes diferentes;
- Self-Validation: Os testes bem escritos retornam com as respostas true ou false, justamente para que a falha não seja subjetiva;
- Timely: Os testes devem seguir à risca o critério de pontualidade. Além disso, o ideal é que sejam escritos antes do próprio código, pois evita que ele fique complexo demais para ser testado.


## Referencias

1- https://balta.io/artigos/clean-code#regras-gerais
2- https://www.hostgator.com.br/blog/clean-code-o-que-e/


# Solid
S.O.L.I.D: Os 5 princípios da POO

- S — Single Responsiblity Principle (Princípio da responsabilidade única)
- O — Open-Closed Principle (Princípio Aberto-Fechado)
- L — Liskov Substitution Principle (Princípio da substituição de Liskov)
- I — Interface Segregation Principle (Princípio da Segregação da Interface)
- D — Dependency Inversion Principle (Princípio da inversão da dependência)

Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.

# Code Smells
Code Smell (cheiro de código) é qualquer característica no código-fonte de um programa que possivelmente indica um problema mais profundo.
Code Smells não são bugs, contudo, eles indicam pontos fracos que podem ocasionar falhas no presente ou no futuro. 

## Quais os Code Smells mais comuns?
Existem cinco tipos de Code Smells que são mais comuns no dia a dia da equipe tech de uma startup. Confira um resumo a seguir. 

### Bloaters 

Bloater (inchaço) é quando um código cresce demais, já que as suas responsabilidades não foram bem definidas durante o seu planejamento. Ocorre quando o código consome responsabilidades de outras classes. 

### Object-Orientation Abusers

Trata-se da violação à orientação de objetos. Assim, a aplicação inadequada total ou parcialmente da herança, polimorfismo ou encapsulamento podem provocar problemas no código. Para identificar este problema, repare se o código tem muitos ifs ou switches complexos. 

### Change Preventers 

É o tipo de código que dificulta a manutenção, pois está relacionado à ideia de “código espaguete”. Ele é aquele que ao “puxar” um ponto para correção, automaticamente se atinge outros pontos. De maneira geral, códigos assim devem ser reescritos. 

### Dispensables

São os trechos do código que podem ser removidos sem afetar a aplicação, como comentários longos, partes duplicadas e outros itens que deixam o código-fonte longo demais. Afinal, um código enxuto reduz a chance de erros e falhas. 

### Couplers

Trata-se do alto acoplamento, que é a forma que temos de medir o quão dependente uma classe é das outras. Assim, uma boa prática da Programação Orientada a Objetos (POO) é que uma aplicação de qualidade tem baixo acoplamento. Portanto, o ideal é prevenir este problema. 