import os
import base64
from playwright.sync_api import sync_playwright

def get_base64_image(path):
    if os.path.exists(path):
        with open(path, "rb") as f:
            ext = os.path.splitext(path)[1].lower().replace('.', '')
            if ext == 'svg':
                mime = 'image/svg+xml'
            elif ext in ['jpg', 'jpeg']:
                mime = 'image/jpeg'
            else:
                mime = 'image/png'
            return f"data:{mime};base64,{base64.b64encode(f.read()).decode('utf-8')}"
    return ""

logo_b64 = get_base64_image("e:/Takos/P_D_Agency/public/assets/pd-agency-logo.png")

html_content = f"""<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<title>P&D Agency — Curriculum Vitae & Perfil Corporativo (One-Page A4)</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap');

  @page {{
    size: A4 portrait;
    margin: 0;
  }}

  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }}

  html, body {{
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1e293b;
    font-size: 8.2pt;
    line-height: 1.38;
    overflow: hidden;
  }}

  .page-container {{
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: #ffffff;
    overflow: hidden;
  }}

  /* HEADER */
  .header {{
    background: linear-gradient(135deg, #090e17 0%, #0f172a 60%, #1e293b 100%);
    color: #ffffff;
    padding: 16px 24px 12px 24px;
    border-bottom: 3px solid #0284c7;
    flex-shrink: 0;
  }}

  .header-top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }}

  .brand-group {{
    display: flex;
    align-items: center;
    gap: 14px;
  }}

  .logo-img {{
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    background: #000;
    padding: 3px;
    object-fit: contain;
  }}

  .agency-name {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 21pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1;
  }}

  .agency-name span {{
    color: #38bdf8;
  }}

  .agency-tagline {{
    font-size: 7.8pt;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #94a3b8;
    margin-top: 3px;
  }}

  .header-badge {{
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.45);
    color: #38bdf8;
    padding: 4.5px 12px;
    border-radius: 18px;
    font-size: 7.2pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-family: 'Space Grotesk', sans-serif;
  }}

  .contact-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 7.6pt;
    color: #cbd5e1;
  }}

  .contact-item {{
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
  }}

  .contact-item strong {{
    color: #38bdf8;
    font-weight: 700;
  }}

  /* BODY TWO-COLUMN LAYOUT */
  .content-grid {{
    display: grid;
    grid-template-columns: 66mm 1fr;
    flex: 1;
    overflow: hidden;
  }}

  /* SIDEBAR (LEFT) */
  .sidebar {{
    background: #f8fafc;
    border-right: 1px solid #e2e8f0;
    padding: 14px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  .sidebar-section {{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }}

  .sidebar-title {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 2.5px;
    border-bottom: 1.8px solid #0284c7;
    margin-bottom: 3px;
  }}

  .info-list {{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3.5px;
  }}

  .info-item {{
    font-size: 7.3pt;
    color: #475569;
    line-height: 1.3;
  }}

  .info-item b {{
    color: #0f172a;
    font-weight: 700;
    display: block;
    font-size: 7.4pt;
  }}

  /* 2x2 STATS GRID */
  .stats-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    margin-top: 1px;
  }}

  .stat-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-left: 3px solid #0284c7;
    padding: 6px 7px;
    border-radius: 6px;
    text-align: left;
  }}

  .stat-val {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11pt;
    font-weight: 800;
    color: #0284c7;
    line-height: 1;
  }}

  .stat-lbl {{
    font-size: 6.2pt;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-top: 2px;
    line-height: 1.15;
  }}

  .skill-pills {{
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }}

  .skill-pill {{
    display: inline-block;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    color: #334155;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 6.8pt;
    font-weight: 600;
  }}

  .skill-pill.primary {{
    background: #e0f2fe;
    border-color: #bae6fd;
    color: #0369a1;
    font-weight: 700;
  }}

  /* MAIN CONTENT (RIGHT) */
  .main {{
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
  }}

  .section {{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }}

  .section-title {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #0f172a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2.5px;
    border-bottom: 1.5px solid #e2e8f0;
  }}

  .section-title span {{
    color: #0284c7;
  }}

  .profile-summary {{
    font-size: 7.7pt;
    color: #334155;
    line-height: 1.42;
    text-align: justify;
  }}

  /* SERVICES CARDS */
  .services-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }}

  .service-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-top: 2.5px solid #0284c7;
    border-radius: 6px;
    padding: 7px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  .service-role {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 7.7pt;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 3px;
    line-height: 1.2;
  }}

  .service-desc {{
    font-size: 6.9pt;
    color: #475569;
    line-height: 1.3;
  }}

  /* PROJECT LIST */
  .projects-container {{
    display: flex;
    flex-direction: column;
    gap: 4.5px;
  }}

  .project-box {{
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 9px;
  }}

  .project-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5px;
  }}

  .project-title {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8.1pt;
    font-weight: 800;
    color: #0f172a;
  }}

  .project-badge {{
    font-size: 6pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    padding: 1.5px 5.5px;
    border-radius: 9px;
    background: #dcfce7;
    color: #15803d;
  }}

  .project-sub {{
    font-size: 7pt;
    font-weight: 700;
    color: #0284c7;
    margin-bottom: 2px;
  }}

  .project-desc {{
    font-size: 7.1pt;
    color: #475569;
    line-height: 1.3;
  }}

  /* WORKFLOW */
  .workflow-grid {{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    margin-top: 1px;
  }}

  .workflow-step {{
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 5px 3px;
    text-align: center;
  }}

  .step-num {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8.5pt;
    font-weight: 800;
    color: #0284c7;
    line-height: 1;
  }}

  .step-title {{
    font-size: 6.2pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    margin-top: 1.5px;
  }}

  .step-sub {{
    font-size: 5.5pt;
    color: #64748b;
    margin-top: 1px;
    line-height: 1.15;
  }}

  /* TESTIMONIAL BANNER AT BOTTOM */
  .testimonial-bar {{
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-left: 3px solid #0284c7;
    padding: 5px 9px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }}

  .testimonial-text {{
    font-size: 6.8pt;
    font-style: italic;
    color: #0369a1;
    line-height: 1.25;
  }}

  .testimonial-author {{
    font-size: 6.5pt;
    font-weight: 800;
    font-style: normal;
    color: #0f172a;
    white-space: nowrap;
  }}

  /* FOOTER */
  .page-footer {{
    padding: 6px 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.6pt;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }}

  .page-footer strong {{
    color: #0f172a;
  }}
</style>
</head>
<body>

<div class="page-container">
  
  <!-- HEADER -->
  <header class="header">
    <div class="header-top">
      <div class="brand-group">
        <img src="{logo_b64}" alt="P&D Agency" class="logo-img" />
        <div>
          <h1 class="agency-name">P&D <span>AGENCY</span></h1>
          <p class="agency-tagline">Agência Digital & Comunicação Estratégica Personalizada</p>
        </div>
      </div>
      <div class="header-badge">Full-Service Boutique • Portugal</div>
    </div>
    
    <div class="contact-bar">
      <div class="contact-item">📍 <span>Leiria / Pombal • Portugal</span></div>
      <div class="contact-item">✉️ <span>pd.agency.digital01@gmail.com</span></div>
      <div class="contact-item">📱 <span>+351 926 256 8423</span></div>
      <div class="contact-item">🌐 <strong>pdagencydigital.com</strong></div>
      <div class="contact-item">📸 <span>@pd_agency_digital</span></div>
    </div>
  </header>

  <!-- CONTENT GRID (ONE-PAGE LAYOUT) -->
  <div class="content-grid">
    
    <!-- SIDEBAR (LEFT) -->
    <aside class="sidebar">
      
      <div class="sidebar-section">
        <div class="sidebar-title">🏢 Perfil Institucional</div>
        <ul class="info-list">
          <li class="info-item"><b>Modelo:</b> Agência Boutique de Engenharia & Design</li>
          <li class="info-item"><b>Atuação:</b> PMEs, Líderes de Setor e Profissionais</li>
          <li class="info-item"><b>Cobertura:</b> Portugal & Mercado Internacional</li>
          <li class="info-item"><b>Diferencial:</b> Engenharia 100% Sob Medida</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">📊 Indicadores (KPIs)</div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-val">+5 Projetos</div>
            <div class="stat-lbl">Entregues</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">+340%</div>
            <div class="stat-lbl">Conversão</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">3-21 Dias</div>
            <div class="stat-lbl">Entrega Ágil</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">24/7</div>
            <div class="stat-lbl">Monitorização</div>
          </div>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">⚡ Stack Tecnológica</div>
        <div class="skill-pills">
          <span class="skill-pill primary">React.js</span>
          <span class="skill-pill primary">Next.js</span>
          <span class="skill-pill primary">Tailwind CSS</span>
          <span class="skill-pill">Vercel Edge</span>
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">HTML5 / CSS3</span>
          <span class="skill-pill">Core Web Vitals</span>
          <span class="skill-pill">SEO Avançado</span>
          <span class="skill-pill">UI/UX Systems</span>
          <span class="skill-pill">Git / GitHub</span>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">🛡️ Garantias & Segurança</div>
        <ul class="info-list">
          <li class="info-item"><b>Código Proprietário:</b> 100% na posse do cliente.</li>
          <li class="info-item"><b>Uptime & Suporte:</b> Monitorização ativa 24/7.</li>
          <li class="info-item"><b>Conformidade:</b> RGPD & Livro de Reclamações.</li>
          <li class="info-item"><b>Segurança:</b> Encriptação SSL/TLS End-to-End.</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">🌐 Idiomas Suportados</div>
        <ul class="info-list">
          <li class="info-item">🇵🇹 <b>Português:</b> Nativo</li>
          <li class="info-item">🇬🇧 <b>Inglês:</b> Fluente (Negócios)</li>
          <li class="info-item">🇪🇸 🇫🇷 🇩🇪 <b>ES, FR & DE:</b> Multilíngue Nativo</li>
        </ul>
      </div>

    </aside>

    <!-- MAIN COLUMN (RIGHT) -->
    <main class="main">
      
      <!-- RESUMO EXECUTIVO -->
      <section class="section">
        <div class="section-title">
          <div>🎯 Resumo Profissional & <span>Posicionamento</span></div>
        </div>
        <div class="profile-summary">
          A <strong>P&D Agency</strong> é uma agência boutique de engenharia digital e branding estratégico em Portugal. Sem recorrer a construtores genéricos lentos, arquitetamos plataformas web em React e Next.js com velocidade máxima, autoridade visual de luxo e conversão real de clientes. Atuamos como parceiros de negócio dedicados desde o diagnóstico até à manutenção contínua.
        </div>
      </section>

      <!-- SOLUÇÕES 360º -->
      <section class="section">
        <div class="section-title">
          <div>💼 Soluções Principais & <span>Áreas de Intervenção</span></div>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-role">1. Engenharia Web & Apps</div>
            <div class="service-desc">Websites corporativos, portais dinâmicos e landing pages com Google Score 95-100, Cloud CDN e SEO avançado.</div>
          </div>
          <div class="service-card">
            <div class="service-role">2. Identidade & UI/UX</div>
            <div class="service-desc">Sistemas de design de luxo, logótipos vetoriais, micro-interações e presença visual de autoridade.</div>
          </div>
          <div class="service-card">
            <div class="service-role">3. Catálogos & E-Commerce</div>
            <div class="service-desc">Montras virtuais, simuladores dinâmicos de orçamentos e integração direta com WhatsApp e pagamentos (MB Way).</div>
          </div>
        </div>
      </section>

      <!-- CASOS DE SUCESSO -->
      <section class="section">
        <div class="section-title">
          <div>🚀 Casos de Estudo & <span>Projetos em Produção</span></div>
        </div>

        <div class="projects-container">
          
          <!-- DRA. AUREA -->
          <div class="project-box">
            <div class="project-header">
              <div class="project-title">Dra. Áurea Agostinho</div>
              <span class="project-badge">Ao Vivo • Produção</span>
            </div>
            <div class="project-sub">Medicina Estética & Harmonização Facial • Quiet Beauty</div>
            <div class="project-desc">
              Plataforma digital editorial de luxo para clínica de medicina estética. Catálogo de tratamentos (Botox, Bioestimuladores, Ácido Hialurónico), agendamento online e otimização clínica de alta autoridade.
            </div>
          </div>

          <!-- AGOSTINHO BIKES -->
          <div class="project-box">
            <div class="project-header">
              <div class="project-title">Agostinho Bikes</div>
              <span class="project-badge">Ao Vivo • Produção</span>
            </div>
            <div class="project-sub">Stand & Oficina de Ciclismo Especializado Mondraker • Pombal</div>
            <div class="project-desc">
              Portal com catálogo interativo de bicicletas, simulador de aluguer, formulários de assistência técnica para oficina mecânica e integração com Google Maps / SEO local.
            </div>
          </div>

          <!-- ROUTE N109 -->
          <div class="project-box">
            <div class="project-header">
              <div class="project-title">Route N109 Mobilidade</div>
              <span class="project-badge">Ao Vivo • Produção</span>
            </div>
            <div class="project-sub">Stand de Mobilidade Elétrica & Veículos Sustentáveis • Guia</div>
            <div class="project-desc">
              Montra digital interativa de motos e scooters elétricas com filtros por autonomia/potência, pedidos diretos de orçamento via WhatsApp e crescimento no volume de leads.
            </div>
          </div>

          <!-- IARA BENTO & TAKOS KING (ROW COMPOSTA) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4.5px;">
            <div class="project-box">
              <div class="project-header">
                <div class="project-title" style="font-size: 7.7pt;">Iara Bento</div>
                <span class="project-badge" style="font-size: 5.6pt;">Ao Vivo</span>
              </div>
              <div class="project-sub" style="font-size: 6.6pt;">Social Media & Branding</div>
              <div class="project-desc" style="font-size: 6.7pt;">Estética editorial de luxo com estimador interativo de propostas.</div>
            </div>
            <div class="project-box">
              <div class="project-header">
                <div class="project-title" style="font-size: 7.7pt;">Takos King</div>
                <span class="project-badge" style="font-size: 5.6pt;">Ao Vivo</span>
              </div>
              <div class="project-sub" style="font-size: 6.6pt;">Restauração & Fast-Casual</div>
              <div class="project-desc" style="font-size: 6.7pt;">Ementa digital mobile-first e captação de clientes locais em Pombal.</div>
            </div>
          </div>

        </div>
      </section>

      <!-- METODOLOGIA DE TRABALHO -->
      <section class="section">
        <div class="section-title">
          <div>⚙️ Metodologia Ágil em <span>5 Etapas</span></div>
        </div>
        <div class="workflow-grid">
          <div class="workflow-step">
            <div class="step-num">01</div>
            <div class="step-title">Descoberta</div>
            <div class="step-sub">Metas & Mercado</div>
          </div>
          <div class="workflow-step">
            <div class="step-num">02</div>
            <div class="step-title">UI/UX Design</div>
            <div class="step-sub">Protótipos Alta Fidelidade</div>
          </div>
          <div class="workflow-step">
            <div class="step-num">03</div>
            <div class="step-title">Engenharia</div>
            <div class="step-sub">Código React/Next.js</div>
          </div>
          <div class="workflow-step">
            <div class="step-num">04</div>
            <div class="step-title">Testes QA</div>
            <div class="step-sub">Velocidade 100/100</div>
          </div>
          <div class="workflow-step">
            <div class="step-num">05</div>
            <div class="step-title">Deploy & 24/7</div>
            <div class="step-sub">Suporte Contínuo</div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL VALIDATION BANNER -->
      <div class="testimonial-bar">
        <div class="testimonial-text">
          "A P&D Agency soube ler a nossa visão desde o primeiro instante e prestou um serviço 100% personalizado e impecável."
        </div>
        <div class="testimonial-author">
          — Ana Dominguez Ceramics
        </div>
      </div>

    </main>

  </div>

  <!-- FOOTER -->
  <footer class="page-footer">
    <div>P&D AGENCY • Curriculum Vitae Corporativo & Portfólio Institucional</div>
    <div>1 Página A4 • © 2026 P&D Agency — Confidencial & Oficial</div>
  </footer>

</div>

</body>
</html>
"""

# Salvar HTML
html_path = "e:/Takos/P_D_Agency/curriculo_pd_agency.html"
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"HTML gravado em: {html_path}")

# Gerar PDF 1 Página A4 com Playwright
pdf_path_1 = "e:/Takos/P_D_Agency/curriculo_pd_agency.pdf"
pdf_path_2 = "e:/Takos/curriculo_pd_agency.pdf"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto(f"file:///{os.path.abspath(html_path).replace(os.sep, '/')}", wait_until="networkidle")
    
    # Aguardar fontes carregarem
    page.evaluate("document.fonts.ready")
    
    # Gerar PDF em 1 página A4 exata
    page.pdf(
        path=pdf_path_1,
        format="A4",
        print_background=True,
        margin={"top": "0mm", "right": "0mm", "bottom": "0mm", "left": "0mm"},
        page_ranges="1"
    )
    
    page.pdf(
        path=pdf_path_2,
        format="A4",
        print_background=True,
        margin={"top": "0mm", "right": "0mm", "bottom": "0mm", "left": "0mm"},
        page_ranges="1"
    )
    
    # Renderizar preview da imagem da folha A4 completa
    page.set_viewport_size({"width": 794, "height": 1123}) # Proporção exata A4 em 96 DPI
    page.screenshot(path="e:/Takos/P_D_Agency/cv_preview.png", full_page=False)
    
    browser.close()

print(f"PDF 1 Página A4 gerado com sucesso em:\n- {pdf_path_1}\n- {pdf_path_2}")
