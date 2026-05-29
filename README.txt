FUTURA CASA — Plataforma Premium Funcional

Como abrir localmente:
1. Abra o arquivo index.html em um navegador moderno.
2. Para PWA/service worker, hospede a pasta em um servidor HTTPS ou use um servidor local.

Arquivos principais:
- index.html: entrada da aplicação
- app.css: design system, responsividade e layout
- app.js: navegação, simulador, marketplace, área do cliente, atendimento e painel gestor
- manifest.webmanifest: configuração PWA
- service-worker.js: cache/offline quando hospedado

Rotas disponíveis:
#home
#lotes
#simulador
#marketplace
#obras
#cliente
#atendimento
#painel

Funcionalidades já ativas nesta versão front-end:
- Navegação real por rotas
- Layout responsivo desktop/mobile
- Simulador PRICE/SAC com cálculo dinâmico
- Cards de lotes, casas e combinações
- Favoritos
- Comparador de casas
- Marketplace com carrinho/orçamento
- Área do cliente com obra, documentos, financeiro e atendimentos
- Abertura de ticket demonstrativo
- Painel comercial/operacional
- Salvamento local via localStorage

Para produção real, conectar com:
- Backend/API
- CRM
- WhatsApp Business API
- Gateways de pagamento/boleto
- Banco de dados de lotes, clientes, fornecedores e obras
- Autenticação e permissões de usuários
