import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../../..");

export const readmeEntries = [
  { file: "README.md", locale: "en", projectRef: "./profile/assets/locales/en/maps/project-roadmap.svg", devRef: "./profile/assets/locales/en/maps/development-roadmap.svg" },
  { file: "profile/content/locales/ko.md", locale: "ko", projectRef: "../../assets/locales/ko/maps/project-roadmap.svg", devRef: "../../assets/locales/ko/maps/development-roadmap.svg" },
  { file: "profile/content/locales/zh-CN.md", locale: "zh-CN", projectRef: "../../assets/locales/zh-CN/maps/project-roadmap.svg", devRef: "../../assets/locales/zh-CN/maps/development-roadmap.svg" },
  { file: "profile/content/locales/es.md", locale: "es", projectRef: "../../assets/locales/es/maps/project-roadmap.svg", devRef: "../../assets/locales/es/maps/development-roadmap.svg" },
  { file: "profile/content/locales/hi.md", locale: "hi", projectRef: "../../assets/locales/hi/maps/project-roadmap.svg", devRef: "../../assets/locales/hi/maps/development-roadmap.svg" },
  { file: "profile/content/locales/ar.md", locale: "ar", projectRef: "../../assets/locales/ar/maps/project-roadmap.svg", devRef: "../../assets/locales/ar/maps/development-roadmap.svg" },
  { file: "profile/content/locales/pt-BR.md", locale: "pt-BR", projectRef: "../../assets/locales/pt-BR/maps/project-roadmap.svg", devRef: "../../assets/locales/pt-BR/maps/development-roadmap.svg" },
  { file: "profile/content/locales/ru.md", locale: "ru", projectRef: "../../assets/locales/ru/maps/project-roadmap.svg", devRef: "../../assets/locales/ru/maps/development-roadmap.svg" },
  { file: "profile/content/locales/fr.md", locale: "fr", projectRef: "../../assets/locales/fr/maps/project-roadmap.svg", devRef: "../../assets/locales/fr/maps/development-roadmap.svg" },
  { file: "profile/content/locales/id.md", locale: "id", projectRef: "../../assets/locales/id/maps/project-roadmap.svg", devRef: "../../assets/locales/id/maps/development-roadmap.svg" },
];

function escapeXml(unsafe: string): string {
  return String(unsafe || "").replace(/[<>&'"]/g, c => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

export const roadmapLocales: Record<string, any> = {
  en: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Project Roadmap",
    projSub: "Public Telemetry · Now / Next / Later",
    autoRefresh: "Auto Refresh",
    nowLabel: "NOW",
    nowCount: "02 Public Items",
    nowIssue: "#1 · github-org-map: Zero-Knowledge SHA-256 Cartography",
    nextLabel: "NEXT",
    nextCount: "01 Active Item",
    nextIssue: "#2 · Dynamic Credential Rotation & Failover Bridge",
    laterLabel: "LATER",
    laterCount: "01 Planned Item",
    laterIssue: "#3 · Distributed Autonomous Agent Mesh Topology",
    devTitle: "Development Roadmap",
    devSub: "Workflow Pipeline · Plan / Build / Verify / Ship",
    pipelineBadge: "Telemetry View",
    planLabel: "PLAN",
    planDesc: "Zero-SPOF Distributed Architecture Definition",
    buildLabel: "BUILD",
    buildDesc: "Dual Cartography & Autonomous Agent Core",
    verifyLabel: "VERIFY",
    verifyDesc: "DPAPI Credential Isolation & Security Audit",
    shipLabel: "SHIP",
    shipDesc: "10-Locale Autonomous Profile & Synchronous Release",
    publicOnly: "PUBLIC REPOSITORIES ONLY",
    statusDate: "Status as of 2026-09-20",
  },
  ko: {
    fontFamily: "Noto Sans KR, 'Malgun Gothic', Segoe UI, sans-serif",
    isRtl: false,
    projTitle: "프로젝트 로드맵",
    projSub: "공개 텔레메트리 · 지금 / 다음 / 이후",
    autoRefresh: "자동 갱신",
    nowLabel: "지금 (NOW)",
    nowCount: "02개 공개 항목",
    nowIssue: "#1 · github-org-map: 영지식 SHA-256 매핑 엔진",
    nextLabel: "다음 (NEXT)",
    nextCount: "01개 진행 항목",
    nextIssue: "#2 · 다중 계정 자격증명 로테이션 및 페일오버 브리지",
    laterLabel: "이후 (LATER)",
    laterCount: "01개 예정 항목",
    laterIssue: "#3 · 분산 자율 에이전트 메시 토폴로지",
    devTitle: "개발 파이프라인 로드맵",
    devSub: "엔지니어링 파이프라인 · 계획 / 구축 / 검증 / 출시",
    pipelineBadge: "텔레메트리 뷰",
    planLabel: "계획 (PLAN)",
    planDesc: "Zero-SPOF 분산 아키텍처 및 요구사항 정의",
    buildLabel: "구축 (BUILD)",
    buildDesc: "듀얼 카토그래피 및 자율 에이전트 런타임",
    verifyLabel: "검증 (VERIFY)",
    verifyDesc: "DPAPI 기반 자격증명 격리 및 보안 감사",
    shipLabel: "출시 (SHIP)",
    shipDesc: "10개 언어 풀 패리티 프로필 동기화 및 릴리스",
    publicOnly: "공개 저장소 이슈 기준",
    statusDate: "2026-09-20 기준",
  },
  "zh-CN": {
    fontFamily: "'Microsoft YaHei', 'PingFang SC', sans-serif",
    isRtl: false,
    projTitle: "项目路线图",
    projSub: "公开度量数据 · 当前 / 后续 / 未来",
    autoRefresh: "自动更新",
    nowLabel: "当前 (NOW)",
    nowCount: "02 个公开事项",
    nowIssue: "#1 · github-org-map: 零知识 SHA-256 架构映射引擎",
    nextLabel: "后续 (NEXT)",
    nextCount: "01 个活跃事项",
    nextIssue: "#2 · 动态凭据轮换与故障转移桥接",
    laterLabel: "未来 (LATER)",
    laterCount: "01 个规划事项",
    laterIssue: "#3 · 分布式自主智能体网格拓扑",
    devTitle: "研发路线图",
    devSub: "工程流水线 · 规划 / 构建 / 验证 / 交付",
    pipelineBadge: "遥测视图",
    planLabel: "规划 (PLAN)",
    planDesc: "Zero-SPOF 分布式系统架构定义",
    buildLabel: "构建 (BUILD)",
    buildDesc: "双重拓扑映射与自主代理核心引擎",
    verifyLabel: "验证 (VERIFY)",
    verifyDesc: "DPAPI 凭据安全隔离与合规审计",
    shipLabel: "交付 (SHIP)",
    shipDesc: "10 种语言全对称配置与同步版本发布",
    publicOnly: "仅限公开存储库",
    statusDate: "状态更新: 2026-09-20",
  },
  es: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Hoja de Ruta del Proyecto",
    projSub: "Telemetría pública · Ahora / Siguiente / Más tarde",
    autoRefresh: "Actualización auto",
    nowLabel: "AHORA",
    nowCount: "02 Elementos públicos",
    nowIssue: "#1 · github-org-map: Cartografía SHA-256 sin conocimiento",
    nextLabel: "SIGUIENTE",
    nextCount: "01 Elemento activo",
    nextIssue: "#2 · Rotación dinámica de credenciales y puente de failover",
    laterLabel: "MÁS TARDE",
    laterCount: "01 Elemento planeado",
    laterIssue: "#3 · Topología de malla de agentes autónomos distribuidos",
    devTitle: "Hoja de Ruta de Desarrollo",
    devSub: "Flujo de trabajo · Planificar / Construir / Verificar / Enviar",
    pipelineBadge: "Vista de telemetría",
    planLabel: "PLANIFICAR",
    planDesc: "Definición de arquitectura distribuida Zero-SPOF",
    buildLabel: "CONSTRUIR",
    buildDesc: "Cartografía dual y núcleo de agentes autónomos",
    verifyLabel: "VERIFICAR",
    verifyDesc: "Aislamiento de credenciales DPAPI y auditoría de seguridad",
    shipLabel: "ENVIAR",
    shipDesc: "Perfil autónomo en 10 idiomas y lanzamiento sincrónico",
    publicOnly: "SÓLO REPOSITORIOS PÚBLICOS",
    statusDate: "Estado al 2026-09-20",
  },
  hi: {
    fontFamily: "'Nirmala UI', -apple-system, sans-serif",
    isRtl: false,
    projTitle: "परियोजना रोडमैप",
    projSub: "सार्वजनिक टेलीमेट्री · अभी / आगे / बाद में",
    autoRefresh: "स्वतः अद्यतन",
    nowLabel: "अभी (NOW)",
    nowCount: "02 सार्वजनिक आइटम",
    nowIssue: "#1 · github-org-map: शून्य-ज्ञान SHA-256 मानचित्रण",
    nextLabel: "आगे (NEXT)",
    nextCount: "01 सक्रिय आइटम",
    nextIssue: "#2 · क्रेडेंशियल रोटेशन और फेलओवर ब्रिज",
    laterLabel: "बाद में (LATER)",
    laterCount: "01 योजनाबद्ध आइटम",
    laterIssue: "#3 · वितरित स्वायत्त एजेंट मेष टोपोलॉजी",
    devTitle: "विकास पाइपलाइन रोडमैप",
    devSub: "कार्यप्रवाह · योजना / निर्माण / सत्यापन / वितरण",
    pipelineBadge: "टेलीमेट्री दृश्य",
    planLabel: "योजना (PLAN)",
    planDesc: "Zero-SPOF वितरित वास्तुकला परिभाषा",
    buildLabel: "निर्माण (BUILD)",
    buildDesc: "दोहरी कार्टोग्राफी और स्वायत्त एजेंट कोर",
    verifyLabel: "सत्यापन (VERIFY)",
    verifyDesc: "DPAPI क्रेडेंशियल अलगाव और सुरक्षा ऑडिट",
    shipLabel: "वितरण (SHIP)",
    shipDesc: "10-भाषा स्वायत्त प्रोफ़ाइल और समकालिक रिलीज़",
    publicOnly: "केवल सार्वजनिक रिपॉजिटरी",
    statusDate: "स्थिति: 2026-09-20",
  },
  ar: {
    fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
    isRtl: true,
    projTitle: "خارطة طريق المشروع",
    projSub: "القياس عن بُعد العام · الآن / التالي / لاحقاً",
    autoRefresh: "تحديث تلقائي",
    nowLabel: "الآن (NOW)",
    nowCount: "02 عناصر عامة",
    nowIssue: "#1 · github-org-map: رسم خرائط SHA-256 بدون معرفة",
    nextLabel: "التالي (NEXT)",
    nextCount: "01 عنصر نشط",
    nextIssue: "#2 · تدوير بيانات الاعتماد الديناميكي وجسر تجاوز الفشل",
    laterLabel: "لاحقاً (LATER)",
    laterCount: "01 عنصر مخطط",
    laterIssue: "#3 · طوبولوجيا شبكة الوكلاء المستقلين الموزعة",
    devTitle: "خارطة طريق التطوير",
    devSub: "مسار العمل · تخطيط / بناء / تحقق / إطلاق",
    pipelineBadge: "عرض القياس",
    planLabel: "تخطيط (PLAN)",
    planDesc: "تعريف بنية معمارية موزعة Zero-SPOF",
    buildLabel: "بناء (BUILD)",
    buildDesc: "رسم خرائط مزدوج ونواة الوكلاء المستقلين",
    verifyLabel: "تحقق (VERIFY)",
    verifyDesc: "عزل اعتمادات DPAPI وتدقيق الأمان",
    shipLabel: "إطلاق (SHIP)",
    shipDesc: "ملف تعريف ذاتي بـ 10 لغات وإصدار متزامن",
    publicOnly: "المستودعات العامة فقط",
    statusDate: "الحالة اعتباراً من 2026-09-20",
  },
  "pt-BR": {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Roteiro do Projeto",
    projSub: "Telemetria Pública · Agora / Próximo / Depois",
    autoRefresh: "Atualização Auto",
    nowLabel: "AGORA",
    nowCount: "02 Itens Públicos",
    nowIssue: "#1 · github-org-map: Cartografia SHA-256 com Zero-Knowledge",
    nextLabel: "PRÓXIMO",
    nextCount: "01 Item Ativo",
    nextIssue: "#2 · Rotação Dinâmica de Credenciais e Ponte Failover",
    laterLabel: "DEPOIS",
    laterCount: "01 Item Planejado",
    laterIssue: "#3 · Topologia Mesh de Agentes Autônomos Distribuídos",
    devTitle: "Roteiro de Desenvolvimento",
    devSub: "Pipeline · Planejar / Construir / Verificar / Entregar",
    pipelineBadge: "Visão de Telemetria",
    planLabel: "PLANEJAR",
    planDesc: "Definição de arquitetura distribuída Zero-SPOF",
    buildLabel: "CONSTRUIR",
    buildDesc: "Cartografia dupla e núcleo de agentes autônomos",
    verifyLabel: "VERIFICAR",
    verifyDesc: "Isolamento de credenciais DPAPI e auditoria de segurança",
    shipLabel: "ENTREGAR",
    shipDesc: "Perfil autônomo em 10 idiomas e lançamento síncrono",
    publicOnly: "APENAS REPOSITÓRIOS PÚBLICOS",
    statusDate: "Status em 2026-09-20",
  },
  ru: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Дорожная карта проектов",
    projSub: "Публичная телеметрия · Сейчас / Далее / Позже",
    autoRefresh: "Автообновление",
    nowLabel: "СЕЙЧАС",
    nowCount: "02 открытых проекта",
    nowIssue: "#1 · github-org-map: Картография с нулевым разглашением SHA-256",
    nextLabel: "ДАЛЕЕ",
    nextCount: "01 активный проект",
    nextIssue: "#2 · Динамическая ротация токенов и мост отказоустойчивости",
    laterLabel: "ПОЗЖЕ",
    laterCount: "01 запланированный проект",
    laterIssue: "#3 · Распределенная топология автономных агентов",
    devTitle: "Дорожная карта разработки",
    devSub: "Пайплайн · План / Сборка / Проверка / Релиз",
    pipelineBadge: "Телеметрия",
    planLabel: "ПЛАН",
    planDesc: "Определение распределенной архитектуры Zero-SPOF",
    buildLabel: "СБОРКА",
    buildDesc: "Двойная картография и ядро автономных агентов",
    verifyLabel: "ПРОВЕРКА",
    verifyDesc: "Изоляция учетных данных DPAPI и аудит безопасности",
    shipLabel: "РЕЛИЗ",
    shipDesc: "Автономный профиль на 10 языках и синхронный релиз",
    publicOnly: "ТОЛЬКО ПУБЛИЧНЫЕ РЕПОЗИТОРИИ",
    statusDate: "По состоянию на 2026-09-20",
  },
  fr: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Feuille de Route du Projet",
    projSub: "Télémétrie publique · Actuel / Prochain / Ultérieur",
    autoRefresh: "Mise à jour auto",
    nowLabel: "ACTUEL",
    nowCount: "02 Éléments publics",
    nowIssue: "#1 · github-org-map: Cartographie SHA-256 sans divulgation",
    nextLabel: "PROCHAIN",
    nextCount: "01 Élément actif",
    nextIssue: "#2 · Rotation dynamique des secrets et pont de basculement",
    laterLabel: "ULTÉRIEUR",
    laterCount: "01 Élément planifié",
    laterIssue: "#3 · Topologie maillée d'agents autonomes distribués",
    devTitle: "Feuille de Route de Développement",
    devSub: "Pipeline · Planifier / Construire / Vérifier / Livrer",
    pipelineBadge: "Vue télémétrie",
    planLabel: "PLANIFIER",
    planDesc: "Définition de l'architecture distribuée Zero-SPOF",
    buildLabel: "CONSTRUIRE",
    buildDesc: "Cartographie double et moteur d'agents autonomes",
    verifyLabel: "VÉRIFIER",
    verifyDesc: "Isolation des secrets par DPAPI et audit de sécurité",
    shipLabel: "LIVRER",
    shipDesc: "Profil autonome en 10 langues et déploiement synchrone",
    publicOnly: "DÉPÔTS PUBLICS UNIQUEMENT",
    statusDate: "État au 2026-09-20",
  },
  id: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    isRtl: false,
    projTitle: "Peta Jalan Proyek",
    projSub: "Telemetri Publik · Sekarang / Berikutnya / Nanti",
    autoRefresh: "Pembaruan Otomatis",
    nowLabel: "SEKARANG",
    nowCount: "02 Item Publik",
    nowIssue: "#1 · github-org-map: Kartografi Privasi SHA-256 Tanpa Pengetahuan",
    nextLabel: "BERIKUTNYA",
    nextCount: "01 Item Aktif",
    nextIssue: "#2 · Rotasi Kredensial Dinamis & Jembatan Failover",
    laterLabel: "NANTI",
    laterCount: "01 Item Terencana",
    laterIssue: "#3 · Topologi Mesh Agen Otonom Terdistribusi",
    devTitle: "Peta Jalan Pengembangan",
    devSub: "Alur Kerja · Rancang / Bangun / Verifikasi / Rilis",
    pipelineBadge: "Tampilan Telemetri",
    planLabel: "RANCANG",
    planDesc: "Definisi arsitektur terdistribusi Zero-SPOF",
    buildLabel: "BANGUN",
    buildDesc: "Kartografi ganda & inti agen otonom",
    verifyLabel: "VERIFIKASI",
    verifyDesc: "Isolasi kredensial DPAPI & audit keamanan",
    shipLabel: "RILIS",
    shipDesc: "Profil otonom 10 bahasa & rilis tersinkronisasi",
    publicOnly: "HANYA REPOSITORI PUBLIK",
    statusDate: "Status per 2026-09-20",
  },
};

export function renderProjectRoadmapSvg(c: any): string {
  const isRtl = Boolean(c.isRtl);
  const startX = isRtl ? 456 : 24;
  const anchor = isRtl ? "end" : "start";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400" width="480" height="400">
  <defs>
    <linearGradient id="pBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/><stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="480" height="400" rx="16" fill="url(#pBg)" stroke="#1F2937" stroke-width="1.5"/>
  <rect x="24" y="22" width="8" height="8" rx="2" fill="#38BDF8"/>
  <text x="38" y="29" fill="#F3F4F6" font-family="${escapeXml(c.fontFamily)}" font-size="12" font-weight="700">${escapeXml(c.projTitle)}</text>
  <text x="38" y="44" fill="#9CA3AF" font-family="${escapeXml(c.fontFamily)}" font-size="10">${escapeXml(c.projSub)}</text>

  <rect x="${isRtl ? 24 : 376}" y="20" width="80" height="24" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <circle cx="${isRtl ? 36 : 388}" cy="32" r="3" fill="#10B981"/>
  <text x="${isRtl ? 44 : 396}" y="36" fill="#94A3B8" font-family="${escapeXml(c.fontFamily)}" font-size="9" font-weight="600">${escapeXml(c.autoRefresh)}</text>

  <!-- Lane 1: NOW -->
  <rect x="24" y="66" width="432" height="84" rx="12" fill="#111827" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.8"/>
  <rect x="36" y="78" width="52" height="18" rx="9" fill="#0369A1"/>
  <text x="62" y="91" fill="#FFFFFF" font-family="${escapeXml(c.fontFamily)}" font-size="9" font-weight="800" text-anchor="middle">${escapeXml(c.nowLabel)}</text>
  <text x="${isRtl ? 36 : 444}" y="91" fill="#38BDF8" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" font-weight="600" text-anchor="${isRtl ? "start" : "end"}">${escapeXml(c.nowCount)}</text>
  <text x="${startX}" y="122" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="10.5" font-weight="500" text-anchor="${anchor}">${escapeXml(c.nowIssue)}</text>

  <!-- Lane 2: NEXT -->
  <rect x="24" y="162" width="432" height="84" rx="12" fill="#111827" stroke="#818CF8" stroke-width="1.5" stroke-opacity="0.7"/>
  <rect x="36" y="174" width="56" height="18" rx="9" fill="#4338CA"/>
  <text x="64" y="187" fill="#FFFFFF" font-family="${escapeXml(c.fontFamily)}" font-size="9" font-weight="800" text-anchor="middle">${escapeXml(c.nextLabel)}</text>
  <text x="${isRtl ? 36 : 444}" y="187" fill="#818CF8" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" font-weight="600" text-anchor="${isRtl ? "start" : "end"}">${escapeXml(c.nextCount)}</text>
  <text x="${startX}" y="218" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="10.5" font-weight="500" text-anchor="${anchor}">${escapeXml(c.nextIssue)}</text>

  <!-- Lane 3: LATER -->
  <rect x="24" y="258" width="432" height="84" rx="12" fill="#111827" stroke="#C084FC" stroke-width="1.5" stroke-opacity="0.6"/>
  <rect x="36" y="270" width="60" height="18" rx="9" fill="#6B21A8"/>
  <text x="66" y="283" fill="#FFFFFF" font-family="${escapeXml(c.fontFamily)}" font-size="9" font-weight="800" text-anchor="middle">${escapeXml(c.laterLabel)}</text>
  <text x="${isRtl ? 36 : 444}" y="283" fill="#C084FC" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" font-weight="600" text-anchor="${isRtl ? "start" : "end"}">${escapeXml(c.laterCount)}</text>
  <text x="${startX}" y="314" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="10.5" font-weight="500" text-anchor="${anchor}">${escapeXml(c.laterIssue)}</text>

  <line x1="24" y1="360" x2="456" y2="360" stroke="#1F2937" stroke-width="1"/>
  <text x="${startX}" y="380" fill="#38BDF8" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" font-weight="700" text-anchor="${anchor}">${escapeXml(c.publicOnly)}</text>
  <text x="${isRtl ? 24 : 456}" y="380" fill="#6B7280" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" text-anchor="${isRtl ? "start" : "end"}">${escapeXml(c.statusDate)}</text>
</svg>`;
}

export function renderDevelopmentRoadmapSvg(c: any): string {
  const isRtl = Boolean(c.isRtl);
  const startX = isRtl ? 456 : 24;
  const anchor = isRtl ? "end" : "start";
  const railX = isRtl ? 432 : 48;
  const cardX = isRtl ? 24 : 76;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 420" width="480" height="420">
  <defs>
    <linearGradient id="dBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/><stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="480" height="420" rx="16" fill="url(#dBg)" stroke="#1F2937" stroke-width="1.5"/>
  <rect x="24" y="22" width="8" height="8" rx="2" fill="#10B981"/>
  <text x="38" y="29" fill="#F3F4F6" font-family="${escapeXml(c.fontFamily)}" font-size="12" font-weight="700">${escapeXml(c.devTitle)}</text>
  <text x="38" y="44" fill="#9CA3AF" font-family="${escapeXml(c.fontFamily)}" font-size="10">${escapeXml(c.devSub)}</text>

  <rect x="${isRtl ? 24 : 376}" y="20" width="80" height="24" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <circle cx="${isRtl ? 36 : 388}" cy="32" r="3" fill="#38BDF8"/>
  <text x="${isRtl ? 44 : 396}" y="36" fill="#94A3B8" font-family="${escapeXml(c.fontFamily)}" font-size="9" font-weight="600">${escapeXml(c.pipelineBadge)}</text>

  <!-- Connecting Rail -->
  <line x1="${railX}" y1="106" x2="${railX}" y2="292" stroke="#374151" stroke-width="2" stroke-dasharray="4 4"/>

  <!-- Stage 1: PLAN -->
  <circle cx="${railX}" cy="106" r="9" fill="#111827" stroke="#38BDF8" stroke-width="2"/><circle cx="${railX}" cy="106" r="3" fill="#38BDF8"/>
  <rect x="${cardX}" y="79" width="356" height="54" rx="10" fill="#111827" stroke="#38BDF8" stroke-opacity=".4"/>
  <text x="${cardX + 16}" y="98" fill="#38BDF8" font-family="${escapeXml(c.fontFamily)}" font-size="11" font-weight="700">${escapeXml(c.planLabel)}</text>
  <text x="${cardX + 16}" y="118" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="9.5">${escapeXml(c.planDesc)}</text>

  <!-- Stage 2: BUILD -->
  <circle cx="${railX}" cy="168" r="9" fill="#111827" stroke="#67E8F9" stroke-width="2"/><circle cx="${railX}" cy="168" r="3" fill="#67E8F9"/>
  <rect x="${cardX}" y="141" width="356" height="54" rx="10" fill="#111827" stroke="#67E8F9" stroke-opacity=".4"/>
  <text x="${cardX + 16}" y="160" fill="#67E8F9" font-family="${escapeXml(c.fontFamily)}" font-size="11" font-weight="700">${escapeXml(c.buildLabel)}</text>
  <text x="${cardX + 16}" y="180" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="9.5">${escapeXml(c.buildDesc)}</text>

  <!-- Stage 3: VERIFY -->
  <circle cx="${railX}" cy="230" r="9" fill="#111827" stroke="#F472B6" stroke-width="2"/><circle cx="${railX}" cy="230" r="3" fill="#F472B6"/>
  <rect x="${cardX}" y="203" width="356" height="54" rx="10" fill="#111827" stroke="#F472B6" stroke-opacity=".4"/>
  <text x="${cardX + 16}" y="222" fill="#F472B6" font-family="${escapeXml(c.fontFamily)}" font-size="11" font-weight="700">${escapeXml(c.verifyLabel)}</text>
  <text x="${cardX + 16}" y="242" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="9.5">${escapeXml(c.verifyDesc)}</text>

  <!-- Stage 4: SHIP -->
  <circle cx="${railX}" cy="292" r="9" fill="#111827" stroke="#34D399" stroke-width="2"/><circle cx="${railX}" cy="292" r="3" fill="#34D399"/>
  <rect x="${cardX}" y="265" width="356" height="54" rx="10" fill="#111827" stroke="#34D399" stroke-opacity=".4"/>
  <text x="${cardX + 16}" y="284" fill="#34D399" font-family="${escapeXml(c.fontFamily)}" font-size="11" font-weight="700">${escapeXml(c.shipLabel)}</text>
  <text x="${cardX + 16}" y="304" fill="#E2E8F0" font-family="${escapeXml(c.fontFamily)}" font-size="9.5">${escapeXml(c.shipDesc)}</text>

  <line x1="24" y1="375" x2="456" y2="375" stroke="#1F2937" stroke-width="1"/>
  <text x="${startX}" y="395" fill="#34D399" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" font-weight="700" text-anchor="${anchor}">${escapeXml(c.publicOnly)}</text>
  <text x="${isRtl ? 24 : 456}" y="395" fill="#6B7280" font-family="${escapeXml(c.fontFamily)}" font-size="9.5" text-anchor="${isRtl ? "start" : "end"}">${escapeXml(c.statusDate)}</text>
</svg>`;
}

export async function updateAllRoadmaps(): Promise<void> {
  const assetsDir = path.join(projectRoot, "profile/assets");
  for (const [code, cfg] of Object.entries(roadmapLocales)) {
    const mapsDir = path.join(assetsDir, "locales", code, "maps");
    await mkdir(mapsDir, { recursive: true });

    const projSvg = renderProjectRoadmapSvg(cfg);
    const devSvg = renderDevelopmentRoadmapSvg(cfg);

    await writeFile(path.join(mapsDir, "project-roadmap.svg"), projSvg, "utf-8");
    await writeFile(path.join(mapsDir, "development-roadmap.svg"), devSvg, "utf-8");

    if (code === "en") {
      const rootMapsDir = path.join(assetsDir, "maps");
      await mkdir(rootMapsDir, { recursive: true });
      await writeFile(path.join(rootMapsDir, "project-roadmap.svg"), projSvg, "utf-8");
      await writeFile(path.join(rootMapsDir, "development-roadmap.svg"), devSvg, "utf-8");
    }
  }
  console.log("[OK] Updated all 10 localized project & development roadmaps");
}

if (process.argv[1] && process.argv[1].endsWith("update-roadmaps.js")) {
  updateAllRoadmaps().catch(console.error);
}
