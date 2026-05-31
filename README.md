# ✦ MyAppBox — Minha Caixa de Apps Pessoal

O **MyAppBox** é uma dashboard/caixa de ferramentas minimalista e de alta performance que criei para consolidar e acelerar o acesso aos meus aplicativos, serviços e ferramentas web mais utilizados no dia a dia. 

Desenvolvi este projeto utilizando apenas tecnologias nativas (HTML5, CSS3 e JavaScript puro), sem frameworks pesados, para garantir um carregamento instantâneo. A interface conta com um fundo cósmico imersivo, transições fluidas em 3D, suporte a múltiplos temas e uma paleta de comandos avançada controlada por teclado.

---

## ✨ Funcionalidades Principais

* **Fundo Cósmico Interativo & Trilha Fluida:** Sistema dinâmico construído em `HTML5 Canvas` que reage ao movimento do cursor com estrelas cadentes, nebulosas e uma trilha elástica ultra-suave (otimizada com algoritmos de interpolação LERP para eliminar picos ou travamentos nas curvas).
* **Command Palette (Ctrl + K / Cmd + K):** Uma barra de ferramentas global e instantânea inspirada em IDEs modernas (como VS Code). Permite buscar aplicativos, mudar temas e rodar rotinas internas sem tirar as mãos do teclado.
* **Filtros Dinâmicos por Categoria:** Navegação rápida organizada entre filtros padrão (*Google, Social, Dev, IA, Outros*) e uma seção exclusiva para os meus favoritos.
* **Sistema de Favoritos Persistente:** Permite favoritar ou remover ferramentas clicando no ícone de estrela de qualquer card. As preferências são salvas de forma automática no navegador via `localStorage`.
* **Atalhos de Teclado Avançados:**
    * `Ctrl + K` ou `Cmd + K`: Abre e fecha a Command Palette.
    * `/` (Barra): Foca instantaneamente no campo de busca principal.
    * `Esc`: Limpa o campo de pesquisa, remove filtros ativos ou fecha a paleta de comandos.
    * `Teclas de 1 a 9`: Abre automaticamente o aplicativo correspondente àquela posição no grid atual.
    * `Enter` na busca: Se o termo digitado não bater com nenhum aplicativo local, pressionar Enter dispara uma pesquisa direta no Google em uma nova aba.
* **Design Responsivo e Temas Dinâmicos:** Interface adaptável para celulares e computadores com suporte a 4 variações visuais: Cosmic 🌌, Neon ⚡, Nature 🌿, e Dark 🖤.
* **Efeitos Visuais Premium:** Cards interativos que traqueiam o ponteiro do mouse com iluminação radial (*Glow Mouse Tracking*), efeito de inclinação física (*3D Tilt*) e efeito cascata no carregamento.

---

## 🛠️ Tecnologias Utilizadas

Optei por construir a arquitetura **100% Vanilla (Sem dependências externas)** para atingir uma taxa de quadros estável (60 FPS) e carregamento imediato:

* **HTML5:** Estrutura semântica e renderização gráfica avançada via múltiplos elementos `<canvas>`.
* **CSS3 Moderno:** Customização baseada em CSS Variables (propriedades customizadas), animações estruturadas (`@keyframes`), layouts fluidos em Grid/Flexbox e desfoque nativo com `backdrop-filter`.
* **JavaScript (ES6+):** Manipulação assíncrona da árvore do DOM, gerenciamento de persistência de dados local, lógica de física matemática para atraso elétrico do mouse e gerenciamento global de eventos de teclado.
* **Tipografia e Ícones:** Fontes via Google Fonts (Inter) e vetores via Font Awesome v6.

---

## 🚀 Como Executar o Projeto

Por ser um projeto front-end estático, ele não exige instalação de Node.js, compiladores ou servidores pesados.

### Execução Local
1. Clone este repositório na sua máquina:
   '''bash
   git clone https://github.com/SEU-USUARIO/myappbox.git
   '''
2. Abra a pasta do projeto.
3. Dê dois cliques sobre o arquivo `index.html` para executá-lo em qualquer navegador web moderno.

### Hospedando no GitHub Pages (Recomendado)
Se você quiser deixar a sua caixa de ferramentas online e acessível de qualquer lugar:
1. Suba os arquivos (`index.html`, `style.css`, `script.js`) para um repositório público no seu perfil do GitHub.
2. Vá nas **Settings (Configurações)** do repositório.
3. No menu lateral esquerdo, clique na aba **Pages**.
4. Em *Build and deployment*, mude a Source para **Deploy from a branch**, escolha a sua branch principal (`main` ou `master`) e a pasta raiz `/ (root)`.
5. Salve as alterações. Em poucos instantes o GitHub gerará um link público para o seu site (ex: `https://seu-usuario.github.io/myappbox/`).

---

## ⚙️ Orientações para Customização e Modificações

Criei este projeto de forma modular para que seja extremamente simples de ser customizado e adaptado para as suas necessidades. Aqui estão os caminhos de como fazer as principais alterações:

### 1. Adicionando ou Removendo Seus Aplicativos
Todos os links do painel ficam centralizados em uma única estrutura de dados estruturada no topo do arquivo `script.js`. 

Para adicionar um novo site ou ferramenta sua, basta abrir o arquivo `script.js` e inserir um novo objeto dentro do array `const APPS`. Siga este modelo básico:

'''javascript
{
  name: "Nome do Seu Serviço",
  desc: "Breve descrição do que ele faz",
  url: "https://link-do-seu-site.com",
  icon: "https://link-do-icone-ou-favicon.png",
  category: "sua-categoria",
  tags: ["palavra-chave", "sinonimo", "busca"]
}
'''
* *Dica sobre as Categorias padrão:* `google`, `social`, `dev`, `ia`, `outros`.
* *Dica sobre as Tags:* Adicione termos correlacionados em letras minúsculas para facilitar que o motor de busca ache o card mesmo se você não digitar o nome exato dele.

### 2. Criando Novas Categorias e Filtros
Se você quiser incluir um novo botão de categoria nel cabeçalho (ex: "Finanças"):
1. No `index.html`, vá até a área da `<div class="filters" id="filters">` e adicione a tag do botão:
   '''html
   <button class="filter-btn" data-filter="financas">Finanças</button>
   '''
2. No seu banco de dados dentro do `script.js`, mude a propriedade `category` dos aplicativos desejados para `"financas"`. O JavaScript fará o mapeamento e a filtragem automaticamente.

### 3. Modificando as Cores dos Temas
Toda a identidade visual do projeto e seus esquemas de cores ficam isolados no início do arquivo `style.css` através dos seletores de atributos `:root` e `[data-theme]`.

Caso queira alterar os tons de um tema ou entender como as variáveis funcionam para criar o seu próprio tema:
'''css
[data-theme="neon"] {
  --bg: #050510;                       /* Fundo geral da página */
  --card-bg: rgba(0, 255, 200, 0.03);  /* Camada sutil interna do card */
  --card-border: rgba(0, 255, 200, 0.1);/* Borda padrão */
  --card-hover-border: rgba(0, 255, 200, 0.5);/* Margem destacada no hover */
  --text-primary: #e0fff8;             /* Cor das fontes de títulos */
  --text-secondary: #00e5b0;           /* Cor das fontes de descrições */
  --accent: #00ffcc;                   /* Tom de destaque primário */
  --accent2: #ff00aa;                  /* Tom secundário para gradientes */
  --glow: rgba(0, 255, 200, 0.12);     /* Sombra interna/Externa de brilho */
}
'''

### 4. Customizando Comandos da Palette
Você pode registrar novas funções no atalho `Ctrl+K`. No arquivo `script.js`, vá no array `const COMMANDS` e adicione novos gatilhos injetando códigos ou comportamentos customizados na propriedade `action`:

'''javascript
{ 
  type: 'cmd', 
  name: 'Meu Novo Comando', 
  desc: 'Ação executada por mim', 
  icon: 'fa-code-branch', 
  action: () => { 
    // Insira seu script JavaScript aqui
    console.log("Executado com sucesso!");
  } 
}
'''

## ✒️ Autor

Desenvolvido por **Clebson Marques**.
