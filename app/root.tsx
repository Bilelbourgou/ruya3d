import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { useState, useEffect } from "react";
import { 
  getCurrentUser,
  signIn as puterSignIn,
  signOut as puterSignOut } from "../lib/puter.actions";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/favicon.svg" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const DEFAULT_AUTH_STATE: AuthState = {
  isSignedIn: false,
  username: null,
  userId: null,
};

const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Ruya3D",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web",
      "description": "AI-first spatial design environment converting 2D floor plans into photorealistic 3D architectural renders in seconds.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "Organization",
      "name": "Ruya3D",
      "url": "https://ruya3d.com",
      "logo": "https://ruya3d.com/favicon.svg",
      "sameAs": [
        "https://twitter.com",
        "https://github.com",
        "https://discord.com"
      ]
    }
  ]
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4d4dff" />
        <meta name="color-scheme" content="light" />
        <meta name="author" content="Ruya3D" />
        <meta name="robots" content="index, follow" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [authState, setAuthState] = useState<AuthState>(DEFAULT_AUTH_STATE)
  const refreshAuth = async () =>{
    try {
      const user = await getCurrentUser()
      if (user) {
        setAuthState({
          isSignedIn: !!user,
          username: user?.username || null,
          userId: user?.uuid || null,
        });
        return !!user;
      } else {
        setAuthState(DEFAULT_AUTH_STATE)
        return false
      }
    } catch (error) {
      setAuthState(DEFAULT_AUTH_STATE)
      return false
    }
  }

  useEffect(() => {
    refreshAuth()
  }, [])
    
  const signIn = async () =>{
    await puterSignIn()
    return await refreshAuth()
  }

  const signOut = async () =>{
    await puterSignOut()
    return await refreshAuth()
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative z-10">
      <Outlet context={{ ...authState, refreshAuth, signIn, signOut }} />
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
