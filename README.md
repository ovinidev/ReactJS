# ReactJS

Repositório dedicado aos estudos de React, Next e Typescript.

### 👨🏻‍💻 Technologies:

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60"> &nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="imagem" width="60"> &nbsp;

<br>

<p align="center">
<img src="https://i.imgur.com/Q6wXoPn.png" width=750px/>
  
## **Instalando o node.js:**

https://github.com/nodesource/distributions/blob/master/README.md
  
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
 
sudo apt-get install -y nodejs
```
  
## **Para instalar o Yarn:**
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  
sudo apt update
sudo apt-get install --no-install-recommends yarn
  
yarn install
```
## **Criando um projeto React.js (com typescript):**
  
```
yarn create react-app (nome) --template=typescript
```
 
#### **SPA(Single Page Application)** = Toda interface é construída no front end, toda mudança de rota continua na mesma página.(Create react app).

#### **SSR(Server Side Rendering)** = O SSR pode fornecer aos usuários um carregamento mais eficiente da aplicação, já que parte da renderização é feita no servidor.

#### **SSG(Static Site Generators)** = O site estático é hospedado no servidor como ele é e, quando requisitado, é enviado para o usuário final. Essa hospedagem precisa de muito menos processador, memória e talvez até mesmo espaço em disco.(Gatsby).

#### Next.js permite unir SPA, SSR e SSG, tudo em uma única aplicação.

## **Criando um projeto Next.js:**

```
yarn create next-app (nome)
```

Instalando alguns pacotes:

```
yarn add typescript @types/react @types/react-dom @types/node -D
```
