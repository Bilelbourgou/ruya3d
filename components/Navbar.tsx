import React, { useState } from 'react';
import { Box, Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { NavLink, Link, useOutletContext } from 'react-router';

const Navbar = () => {
  const context = useOutletContext<AuthContext | null>();
  const isSignedIn = context?.isSignedIn ?? false;
  const username = context?.userName ?? null;
  const signIn = context?.signIn;
  const signOut = context?.signOut;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthClick = async () => {
    if (isSignedIn) {
      try {
        if (signOut) await signOut();
      } catch (error) {
        console.error("puter sign out failed", error);
      }
      return;
    }

    try {
      if (signIn) await signIn();
    } catch (error) {
      console.error("puter sign in failed", error);
    }
  };

  const navLinks = [
    { label: "Product", to: "/product" },
    { label: "Pricing", to: "/pricing" },
    { label: "Community", to: "/community" },
    { label: "Enterprise", to: "/enterprise" },
  ];

  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <Link to="/" className="brand flex items-center space-x-2">
            <Box className="logo" />
            <span className="name">Ruya3D</span>
          </Link>

          <ul className="links">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-zinc-500 hover:text-black"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="actions hidden md:flex">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {username ? `Hi, ${username}` : "Signed in"}
              </span>
              <Button size="md" onClick={handleAuthClick} className="btn">
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" onClick={handleAuthClick} variant="ghost">
                Sign in
              </Button>
              <Link to="/#upload" className="cta">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-black/5 px-6 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1.5 text-base font-medium transition-colors ${
                      isActive ? "text-primary font-bold" : "text-zinc-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2.5">
            {isSignedIn ? (
              <>
                <span className="text-xs font-semibold uppercase text-zinc-500">
                  {username ? `Signed in as ${username}` : "Signed in"}
                </span>
                <Button size="md" onClick={() => { handleAuthClick(); setMobileMenuOpen(false); }} className="w-full">
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button size="md" onClick={() => { handleAuthClick(); setMobileMenuOpen(false); }} variant="outline" className="w-full">
                  Sign in
                </Button>
                <Link
                  to="/#upload"
                  onClick={() => setMobileMenuOpen(false)}
                  className="cta text-center w-full py-2.5 rounded-md text-xs uppercase tracking-wide bg-primary text-white font-bold"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;