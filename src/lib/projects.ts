export type Project = {
  slug: string
  title: string
  year: string
  summary: string
  techStack: string[]
  architectureNotes: string
  screenshots: string[]
  githubUrl: string
  liveUrl?: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'personal-finance-app',
    title: 'Personal Finance App',
    year: '2025',
    summary:
      'Managing personal finances requires real-time visibility across accounts, transactions, and spending patterns — but most tools are slow, bloated, or lack developer-grade reliability. This app delivers a sub-second, edge-native finance dashboard with deep data visualization and bulk import support.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn UI', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Clerk Auth', 'React Query', 'Zustand', 'Recharts'],
    architectureNotes: `The backend runs on Hono deployed to Cloudflare's Edge Runtime, keeping API latency under 50ms globally without cold starts. Drizzle ORM with Serverless Postgres (Neon) handles all database access in a fully type-safe manner from schema to query result.

On the frontend, TanStack Virtual renders massive transaction lists without DOM bloat — only visible rows are mounted. CSV imports are processed inside a Web Worker to avoid blocking the main thread, and Optimistic UI updates via React Query give instant feedback before the server confirms writes.

Clerk handles authentication with social OAuth and session management. Zustand manages local UI state (filters, date ranges) while React Query owns all server state. Recharts renders interactive financial charts with custom tooltip overlays.`,
    screenshots: ['/finance-app.png'],
    githubUrl: 'https://github.com/shivang-jnv/Finance-app',
    liveUrl: 'https://finance-app-sigma-lovat.vercel.app',
    tags: ['Full Stack', 'Finance', 'Edge Runtime'],
    featured: true,
  },
  {
    slug: 'team-chat-app',
    title: 'Team Chat App',
    year: '2024',
    summary:
      'Real-time team communication tools need to handle concurrent users, instant message delivery, and complex workspace hierarchies without sacrificing UI responsiveness. This Slack-inspired platform solves that with a reactive database and surgical state management.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Convex', 'Jotai', 'OAuth', 'Bun', 'PostCSS'],
    architectureNotes: `Convex serves as both the backend and reactive database layer. Instead of polling or managing WebSocket connections manually, Convex's live queries push updates directly to subscribed clients the moment data changes. This eliminates the typical complexity of building real-time infrastructure from scratch.

Jotai handles client-side state with atomic granularity — each workspace, channel, and message thread is managed independently, preventing unnecessary re-renders across unrelated parts of the UI.

Multi-workspace isolation is enforced at the data model level. OAuth authentication is handled via Convex Auth, integrating with GitHub and Google providers. The entire backend is defined as TypeScript functions co-located with the frontend, enabling end-to-end type safety.`,
    screenshots: ['/team-chat-platform.png'],
    githubUrl: 'https://github.com/shivang-jnv/slack-clone',
    liveUrl: 'https://slack-clone-chi-five.vercel.app',
    tags: ['Full Stack', 'Real-time', 'WebSockets'],
    featured: true,
  },
  {
    slug: 'workflow-automation-platform',
    title: 'Workflow Automation Platform',
    year: '2025',
    summary:
      'Automation platforms that trigger actions across third-party services need to guarantee delivery even under failure conditions. This Zapier-like platform solves reliability at the infrastructure level using event sourcing and a durable async pipeline.',
    techStack: ['Kafka', 'Express.js', 'Next.js', 'Node.js', 'Docker'],
    architectureNotes: `The platform is built on a microservices architecture with Apache Kafka as the message bus. Each workflow trigger publishes an event to a Kafka topic, decoupling the HTTP layer from action execution entirely.

The Transactional Outbox pattern ensures 100% delivery reliability — events are written to the database and the outbox table in the same transaction before being published to Kafka. A separate relay service polls the outbox and publishes, guaranteeing no event is lost even on crash.

Supported actions include Solana token transfers and automated emails. Each action worker is an isolated consumer group, allowing independent scaling. Docker Compose orchestrates the full local stack, and each service is containerized for production deployment.`,
    screenshots: [],
    githubUrl: 'https://github.com/shivang-jnv/zapier',
    tags: ['Full Stack', 'Distributed Systems', 'Event-Driven'],
  },
  {
    slug: 'complaint-management-system',
    title: 'Complaint Management System',
    year: '2025',
    summary:
      'Institutional complaint workflows are typically handled through spreadsheets or fragmented email chains, with no visibility into status, ownership, or resolution history. This system brings structure, audit trails, and role-based access to the entire lifecycle.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'JWT'],
    architectureNotes: `Role-based access control (RBAC) is implemented at the API route level with three roles: Admin, Faculty, and Student. Each role has a distinct set of permissions enforced server-side via JWT claims — the frontend only reflects what the backend already restricts.

MongoDB stores complaints as documents with embedded status history arrays, enabling full audit trails without a separate audit table. File uploads are handled via multipart form data and stored with references in the complaint document.

JWT tokens are short-lived with refresh token rotation. The Next.js API routes act as a BFF (Backend for Frontend), centralising auth checks and data transformation before sending responses to the client.`,
    screenshots: [],
    githubUrl: 'https://github.com/shivang-jnv/complaint-management-system',
    tags: ['Full Stack', 'RBAC', 'MongoDB'],
  },
  {
    slug: 'blogging-platform',
    title: 'Blogging Platform',
    year: '2024',
    summary:
      'A blogging platform that needs to serve a global audience faces latency and connection-pooling challenges at the database layer. This platform runs its API at the edge while solving the Serverless + database connection problem with Prisma Accelerate.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Hono', 'Prisma Accelerate', 'PostgreSQL', 'JWT', 'Cloudflare Workers'],
    architectureNotes: `Hono runs on Cloudflare Workers, placing the API at edge locations worldwide. This eliminates the round-trip penalty of routing requests to a single-region server — most users get a response from a node within 50ms.

Prisma Accelerate solves the classic Serverless + Postgres problem: Workers can't maintain persistent TCP connections, so Accelerate acts as a global connection pool proxy. Queries are routed through Accelerate to the underlying PostgreSQL instance without exhausting connections.

A shared common-type package (published as a local workspace module) ensures the React frontend and the Hono backend share identical request/response types. JWT authentication is stateless, with tokens validated at the edge without a database lookup.`,
    screenshots: [],
    githubUrl: 'https://github.com/shivang-jnv/medium-clone',
    tags: ['Full Stack', 'Serverless', 'Edge Runtime'],
  },
  {
    slug: 'live-cursors-app',
    title: 'Live Cursors App',
    year: '2025',
    summary:
      'Real-time collaborative tools require low-latency cursor broadcasting with smooth interpolation to avoid jitter. This canvas demonstrates WebSocket-driven multi-user cursor tracking with client-side motion smoothing.',
    techStack: ['React', 'Node.js', 'WebSocket'],
    architectureNotes: `A Node.js WebSocket server (ws library) broadcasts cursor position events to all connected clients in a shared room. Each client emits its cursor coordinates on mousemove, throttled to 30 events per second to avoid flooding the channel.

On the receiving end, each remote cursor position is smoothed using linear interpolation (lerp) applied on each animation frame via requestAnimationFrame. This decouples the rendering loop from the network event rate, producing fluid motion even at lower broadcast frequencies.

Rooms are identified by URL hash, enabling multiple isolated canvases. The server holds no persistent state — disconnecting a client immediately removes their cursor from all peers via a broadcast close event.`,
    screenshots: [],
    githubUrl: 'https://github.com/shivang-jnv/live-cursors-app',
    tags: ['Real-time', 'WebSockets', 'Canvas'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
