# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Semana Spring React SDS4
## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

- Conferir NPM
```bash
npm -v
npm install --global 
```

### criar projetos
- Criar projeto ReactJS com `create-react-app`:
```bash
npx create-react-app frontend --template typescript
```
- *Lembrete: excluir repositório Git do projeto ReactJS*
- Criar projeto Spring Boot no `Spring Initializr` com as seguintes dependências:
  - Web
  - JPA
  - H2
  - Postgres
  - Security
- Se tiver com erro no pom.xml, tentar:
  - Botão direito no projeto -> Maven -> Update project (force update)
  - Menu Project -> Clean
  - Apagar pasta .m2 e deixar o STS refazer o download
- **COMMIT: Project created**

- *Lembrete: ver extensões e arquivos ocultos*
- Salvar o projeto no seu Github
```bash
git config --global user.name <seu nome>
git config --global user.email <seu email>

git init

git add .

git commit -m "Project created"

git remote add origin <seu endereço>

git push -u origin main
```
### "limpar" o projeto ReactJS
- Limpar projeto ReactJS / tsconfig.json
- Arquivo _redirects
```
/* /index.html 200
```
### adicionar Bootstrap e CSS ao projeto
- Bootstrap
```
npm add bootstrap
```
```
(index.tsx) import 'bootstrap/dist/css/bootstrap.css';
```


### adicionar gráficos estáticos
- Apex Charts
```bash
npm add apexcharts
npm add react-apexcharts
```
- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios

### Rotas

- Instalar React Router DOM

```bash
yarn add react-router-dom

yarn add @types/react-router-dom -D
```

- Criar páginas Home e Dashboard
- Criar arquivo de rotas `Routes.tsx`

### First request

- Instalar Axios

```bash
npm add axios
```

- Definir BASE_URL
- Definir tipo SaleSum
- Definir tipo local ChartData em DonutChart
- Fazer a requisição e tratar os dados

### DataTable integration

- Instalar date-fns ao projeto

```bash
yarn add date-fns
```

- Criar tipos Seller, Sale, SalePage
- Criar função auxiliar formatLocalDate

### implantação no Netlify
- Deploy básico
  - Base directory: frontend
  - Build command: npm build
  - Publish directory: frontend/build

- Configurações adicionais
  - Site settings -> Domain Management: (colocar o nome que você quiser)
  - Deploys -> Trigger deploy

## **PARABÉNS!**

![Parabéns!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)

