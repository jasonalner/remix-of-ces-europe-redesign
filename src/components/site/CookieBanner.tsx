import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const KEY = "ces-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const save = (a: boolean) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ necessary: true, analytics: a }));
    } catch {
      /* storage unavailable: choice applies to this visit only */
    }
    setShow(false);
  };
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="inverse fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-deep"
    >
      <div className="container-x flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-sm text-muted-foreground">
          <p>
            We use necessary cookies to run this site and, only if you agree, analytics cookies to
            improve it.{" "}
            <Link to="/cookies" className="underline underline-offset-4 hover:text-foreground">
              Cookie policy
            </Link>
          </p>
          {settings && (
            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" checked disabled /> Necessary (always on)
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />{" "}
                Analytics
              </label>
            </div>
          )}
        </div>
        {/* Reject and Accept carry equal visual weight, as UK guidance expects. */}
        <div className="flex shrink-0 flex-wrap gap-3">
          {settings ? (
            <Button variant="outline" onClick={() => save(analytics)}>
              Save settings
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setSettings(true)}>
              Cookie Settings
            </Button>
          )}
          <Button onClick={() => save(false)}>Reject All</Button>
          <Button onClick={() => save(true)}>Accept All</Button>
        </div>
      </div>
    </div>
  );
}
