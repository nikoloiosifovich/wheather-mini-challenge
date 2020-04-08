# Wheather Mini Challenge

Digamos que você está em Maceió-AL e gostaria de ir à praia. O clima por aqui pode mudar rapidamente estragando, assim, seus planos de um dia de lazer.

Por isso, se a humidade relativa do ar estiver **acima de 70%** não será um bom dia para ir à praia. Sua tarefa é buscar a previsão do tempo em Maceió-AL para os próximos **5 dias** disponível em [https://openweathermap.org/api](https://openweathermap.org/api) e mostrar a seguinte mensagem:

_Não vai dar praia nos seguintes dias:..._

Ou seja, se nos próximos 5 dias a humidade relativa do ar estiver acima de 70% na Segunda, na Quarta e na Sexta, você deve exibir a mensagem:
_Não vai dar praia nos seguintes dias: Segunda, Quarta e Sexta._

# Instalação

`npm install`

# Instruções de uso

Para rodar esta aplicação devemos criar uma arquivo **.env** na raiz do projeto com as seguintes variáveis de ambiente:

> API_KEY=**aqui você insere sua api_key do [openweathermap](https://openweathermap.org/api)**

> LAT=**essa informação pode ser encontrada em [openweathermap](https://openweathermap.org/api)**

> LON=**essa informação pode ser encontrada em [openweathermap](https://openweathermap.org/api)**

Quando em desenvolvimento, utilizar o comando:

`npm run dev`

Quando em produção, utilizar o comando:

`npm start`

# That's all folks ;D
