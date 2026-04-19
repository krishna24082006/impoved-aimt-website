import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { TopBar, SideDock, MobileBar } from "@/components/shell/Nav";
import { WindowFrame } from "@/components/shell/WindowFrame";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-crest">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Window not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-crest px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AIMT — Accurate Institute of Management & Technology" },
      {
        name: "description",
        content:
          "AIMT — a premier institute for management and technology. Explore programs, admissions, campus life, and placements.",
      },
      { property: "og:title", content: "AIMT — Accurate Institute of Management & Technology" },
      {
        property: "og:description",
        content: "Premier institute for management & technology.",
      },
      { property: "og:type", content: "website" },
      {
        name: "google-fonts",
        content:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      { name: "twitter:title", content: "AIMT — Accurate Institute of Management & Technology" },
      { name: "description", content: "A modern, app-like college website featuring window-based navigation and 3D visual integration." },
      { property: "og:description", content: "A modern, app-like college website featuring window-based navigation and 3D visual integration." },
      { name: "twitter:description", content: "A modern, app-like college website featuring window-based navigation and 3D visual integration." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <TopBar />
      <SideDock />
      <MobileBar />
      <WindowFrame>
        <Outlet />
      </WindowFrame>
    </>
  );
}
