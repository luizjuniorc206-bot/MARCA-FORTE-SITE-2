
# 🚀 Guia Marca Forte: Seu Site no Ar Passo a Passo

Parabéns! Você acaba de receber o código completo do seu novo site. Ele foi desenhado para ser rápido, bonito e focado em vender pelo WhatsApp.

Abaixo, explico como colocar tudo isso na internet sem precisar saber programar.

---

## 1. Como colocar o site no ar (Gratuitamente)

Usaremos duas ferramentas: **GitHub** (para guardar os arquivos) e **Vercel** (para deixar o site acessível pelo endereço/URL).

### Passo 1: GitHub
1. Vá em [github.com](https://github.com) e crie uma conta gratuita.
2. Clique no botão "+" no topo direito e escolha "New repository" (Novo repositório).
3. Dê um nome como `marca-forte-site`.
4. Deixe como "Public" e clique em "Create repository".
5. O GitHub mostrará uma página com códigos. Ignore-os por enquanto. Você só precisa subir os arquivos que eu gerei para você.

### Passo 2: Vercel (Onde o site ganha vida)
1. Vá em [vercel.com](https://vercel.com) e crie uma conta usando seu login do GitHub.
2. Clique em "Add New" -> "Project".
3. Você verá seu repositório `marca-forte-site` que criou no GitHub. Clique em "Import".
4. Clique no botão "Deploy".
5. Pronto! Em 1 minuto ele te dará um link como `marca-forte.vercel.app`.

### Passo 3: Seu Domínio Próprio (.com.br)
Se você comprou um domínio (ex: `www.marcaforteoficial.com.br`) no Registro.br:
1. Na Vercel, vá em "Settings" -> "Domains".
2. Digite seu domínio e clique em "Add".
3. A Vercel mostrará dois registros (tipo A e CNAME).
4. Vá no painel do Registro.br e configure esses dois números lá.

---

## 2. Configurando o Google e o Meta (Pixel e Analytics)

Isso serve para você saber quantas pessoas entram no site e para fazer anúncios.

### Meta Pixel (Facebook/Instagram Ads)
1. Vá no seu **Gerenciador de Negócios da Meta** -> Fonte de Dados -> Datasets.
2. Clique em "Adicionar" e crie um novo. Copie o número de Identificação.
3. No arquivo `index.html`, logo abaixo do `<head>`, você deve colar o código que o Facebook te der (chamado de código de rastreamento).

### Google Analytics
1. Vá em [analytics.google.com](https://analytics.google.com) e crie uma "Propriedade".
2. Ele te dará um código começando com `G-XXXXXXXX`.
3. Assim como o Pixel, cole o código no topo do arquivo `index.html`.

---

## 3. Dicas de Especialista (Psicologia de Vendas)

- **As fotos importam:** Substitua os links das imagens no código pelas fotos reais dos seus ferros. Fotos com gado de verdade passando a marca transmitem autoridade.
- **Velocidade:** Este site foi feito para carregar quase instantaneamente no celular do fazendeiro, mesmo com internet 3G/4G no campo.
- **O Botão de Ouro:** O botão de WhatsApp flutuante no canto da tela é o que mais converte. Nunca o remova.

---

### 🔎 SEO (Para aparecer no Google)
Eu já configurei os títulos e descrições invisíveis no código para que quando alguém buscar por "ferro inox 304 para gado", o Google entenda que seu site é a melhor resposta.

**Dúvidas?** Basta seguir a estrutura de arquivos gerada e seu site estará pronto para vender!
