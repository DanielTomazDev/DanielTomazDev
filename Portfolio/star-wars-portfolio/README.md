# 🚀 Portfólio Star Wars - Daniel Tomaz

Um portfólio interativo com tema Star Wars, criado com React, TypeScript e TailwindCSS.

## ⚡ Características

- **Design Temático Star Wars**: Interface futurista com animações inspiradas na saga
- **Animações Avançadas**: Efeitos de parallax, sabres de luz, estrelas em movimento
- **Responsivo**: Otimizado para todos os dispositivos
- **Integração GitHub**: Projetos carregados automaticamente via API
- **Performance**: Otimizado com lazy loading e animações suaves
- **Interativo**: Efeitos de hover, cliques e scroll dinâmicos

## 🛠 Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **TailwindCSS** para estilização
- **Framer Motion** para animações
- **Lucide React** e **React Icons** para ícones
- **GitHub API** para integração de projetos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/DanielTomazDev/star-wars-portfolio.git

# Entre no diretório
cd star-wars-portfolio

# Instale as dependências
npm install

# Execute o projeto
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 📱 Seções do Portfólio

### 1. **Hero Section**
- Frase de impacto personalizada
- Animações interativas com mouse
- Botões para download de CV e contato WhatsApp

### 2. **Sobre Mim**
- Jornada do herói estilo Star Wars
- Missão e valores profissionais
- Código Jedi do desenvolvedor

### 3. **Tecnologias**
- Ícones animados como "naves espaciais"
- Efeitos hover com detalhes de cada tecnologia
- Status da frota tecnológica

### 4. **Serviços Contratáveis**
- 🤖 **Bots Inteligentes** (Discord, WhatsApp, IA)
- 🌐 **Sites e E-commerces** (Landing Pages, Lojas)
- 🏢 **Sistemas Corporativos** (CRMs, ERPs)
- 🔗 **Integrações de APIs** (Automação, Conectividade)

### 5. **Projetos**
- Integração automática com GitHub API
- Cards interativos com informações dos repositórios
- Links para código e demonstrações

### 6. **Habilidades**
- Soft skills com tema Jedi
- Barras de progresso animadas
- Badges personalizadas

### 7. **Contato**
- Múltiplos canais de comunicação
- Efeitos de sabre de luz nos ícones
- Formulário de contato integrado

## 🎨 Personalização

### Cores do Tema
```css
--sw-gold: #FFD700    /* Dourado Star Wars */
--sw-blue: #00BFFF    /* Azul sabre de luz */
--sw-red: #FF0000     /* Vermelho sabre de luz */
--sw-dark: #0A0A0A    /* Preto espacial */
--sw-gray: #1A1A1A    /* Cinza escuro */
```

### Configurações Importantes

1. **GitHub API**: Altere o usuário em `ProjectsSection.tsx`:
```typescript
const response = await fetch('https://api.github.com/users/SEU_USUARIO/repos?sort=updated&per_page=6');
```

2. **Contatos**: Atualize os links em `ContactSection.tsx` e `HeroSection.tsx`

3. **Informações Pessoais**: Modifique os textos em cada seção conforme necessário

## 🌟 Funcionalidades Especiais

### Animações
- **StarField**: Campo de estrelas animado que reage ao mouse
- **Parallax**: Efeitos de profundidade durante o scroll
- **Lightsaber**: Efeitos de sabre de luz nos hovers
- **Loading Screen**: Tela de carregamento temática

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Navegação adaptativa
- Componentes flexíveis

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Animações GPU-aceleradas
- Código minificado para produção

## 📦 Build para Produção

```bash
# Gerar build otimizado
npm run build

# O build estará na pasta 'build/'
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Contato

- **Email**: daniel@danieltomaz.dev
- **LinkedIn**: [linkedin.com/in/daniel-tomaz](https://linkedin.com/in/daniel-tomaz)
- **GitHub**: [github.com/DanielTomazDev](https://github.com/DanielTomazDev)
- **WhatsApp**: [Conversar no WhatsApp](https://wa.me/5511999999999)

---

**"Que a Força esteja com você!"** ⚡

Feito com ❤️, ☕ e muito código por Daniel Tomaz