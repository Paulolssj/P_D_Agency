---
name: pd-agency-clean
description: Guidelines and specifications to implement a premium clean light redesign for P&D Agency based on Corekix benchmarks.
allowed-tools: Read, Write, Edit, Grep
---

# Redesenho Minimalista "Obsidian Clean" para P&D Agency

> Diretrizes de design, SEO e estrutura de alta performance inspiradas na análise da Corekix, adaptadas à identidade da P&D Agency.

---

## 🎨 1. Sistema de Design: "Obsidian Clean"

O design do site será transformado de uma estética puramente escura ("dark mode") para uma interface limpa, iluminada e de altíssimo contraste ("Obsidian Clean"), mantendo a essência de precisão arquitetónica.

### Paleta de Cores

| Função | Cor (Hex/HSL) | Descrição | Inspiração |
|:---|:---|:---|:---|
| **Fundo Principal** | `#FDFBF7` | Tom bege quente ultra-suave como base de fundo principal. | Cores P&D Logo & Beige style |
| **Fundo Secundário** | `#FAF7F0` | Bege médio suave para estruturar cards e destacar seções. | Warm Container |
| **Texto Principal** | `#0F172A` | Azul/Cinza escuro (Slate 900) para cabeçalhos e textos principais. | Premium Slate font |
| **Texto Secundário** | `#475569` | Cinza médio para descrições, subtítulos e metadados. | Slate text |
| **Accent Principal (Logo)**| `#2563EB` | Azul cobalto premium para links ativos, marcas, botões e acentos. | Logotipo P&D Agency |
| **Bordas e Linhas** | `#E2E8F0` | Cinza claro neutro para linhas estruturais e bordas finas. | Slate Borders |

### Tipografia Premium

- **Títulos (Headlines):** `Space Grotesk` (sans-serif geométrica, moderna e com características arquitetónicas únicas).
- **Corpo de Texto (Body):** `Inter` ou `Manrope` (para máxima clareza de leitura, tamanho base `16px` com `lineHeight` de `1.6`).
- **Etiquetas e Metadados (Labels):** `Inter` em Uppercase, tracking espaçado (`tracking-[0.2em]`), peso `700`.

### Geometria e Elementos Visuais

- **Bordas:** Linhas extremamente finas (`1px` ou `0.8px`) em tons de cinza claro (`border-neutral-100` ou `border-black/5`).
- **Botões CTA:** Formato pilula (`rounded-full`) com padding generoso e efeitos suaves de hover (escala de `1.02` e transição rápida).
- **Cards e Containers:** Cantos arredondados generosos (`rounded-2xl` ou `rounded-3xl` / `16px` a `24px`) para manter a suavidade visual.
- **Efeitos de Fundo:** Grelhas ou pontos arquitetónicos ultra-subtis (opacidade de `2%` a `3%`) substituindo os brilhos coloridos do tema escuro.

---

## 📈 2. Métricas de SEO e Acessibilidade (Padrão Corekix)

O site deve ter uma estrutura que responda perfeitamente aos robôs do Google e a motores de busca de inteligência artificial (GEO - Generative Engine Optimization).

### Hierarquia de Cabeçalhos (Semântica HTML5)

1. **H1 Único na Página:**
   - Texto proposto: `CONSTRUÍMOS INTERFACES DE ELITE E APLICAÇÕES DIGITAIS DO FUTURO` (ou similar adaptado).
2. **H2 para Secções Principais:**
   - Ex: `A Nossa Filosofia`, `Como Trabalhamos`, `Soluções de Engenharia`, `Portfólio / O Arquivo`, `Planos de Manutenção`.
3. **H3 para Detalhes e Benefícios específicos:**
   - Ex: Título de cada serviço no Bento Grid, perguntas frequentes ou cards individuais.

### Meta Tags Corrigidas

- **Description única e clara em Português** (sem duplicados de idioma para evitar penalizações do Google).
- **OpenGraph & Twitter Cards** configurados exatamente com títulos e descrições otimizados (limite de 150-160 caracteres para descrição).
- Atributos `alt` descritivos em todas as imagens e SVGs.
- Configuração de tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).

---

## 🛠️ 3. Estrutura e Fluxo da Landing Page

O layout será reorganizado em fluxo narrativo vertical e contínuo, removendo elementos de Bento Grid confusos e utilizando secções limpas de transição suave:

```
┌────────────────────────────────────────────────────────┐
│ 1. Header (Navbar Minimalista - Logo + Link + CTA)     │
├────────────────────────────────────────────────────────┤
│ 2. Hero Section (H1 Gigante + Parágrafo Limpo + CTAs)  │
├────────────────────────────────────────────────────────┤
│ 3. Social Proof / Logos (Empresas/Parceiros)           │
├────────────────────────────────────────────────────────┤
│ 4. Diferenciais (Porquê a P&D - Grid Limpo 3 Colunas)  │
├────────────────────────────────────────────────────────┤
│ 5. Processo de Trabalho (1-Chamada, 2-Design, 3-App)   │
├────────────────────────────────────────────────────────┤
│ 6. Portfólio Selecionado (Cards limpos, imagens reais) │
├────────────────────────────────────────────────────────┤
│ 7. Planos de Suporte (Tabela de preços super clara)    │
├────────────────────────────────────────────────────────┤
│ 8. CTA Final & Footer (Simples, com links e termos)    │
└────────────────────────────────────────────────────────┘
```

### Animações e Performance (Framer Motion)

- **Reveal Progressivo:** Elementos surgem de baixo para cima com `y: 20` para `0` e opacidades de `0` a `1` em `0.6s`.
- **Efeitos de Hover Activo:** Efeitos físicos reais e responsivos (ex: preenchimento suave de botão de transparente para preto, em vez de apenas opacidade).
- **Sem Bloqueio de Thread:** Uso apenas de propriedades otimizadas por GPU (transform, opacity) para evitar perdas de frames de animação e manter o `INP` (Interaction to Next Paint) abaixo de `200ms`.

---

## 📋 4. Lista de Verificação de Implementação (Para o Agente)

- [ ] Modificar `index.html` para definir o tema base padrão como claro (`class="light"`) ou remover a classe `dark` do `<html>`.
- [ ] Atualizar as variáveis de cores no `index.css` (definir cores primárias como Obsidian, fundo como branco e acentos como esmeralda).
- [ ] Atualizar o `LandingPage.jsx` aplicando o novo design "Obsidian Clean" às secções.
- [ ] Corrigir as descrições de SEO e cabeçalhos H1/H2 de acordo com a semântica de alta performance.
- [ ] Testar a interface em dispositivos móveis (responsividade total).
- [ ] Executar o checklist final de qualidade.
