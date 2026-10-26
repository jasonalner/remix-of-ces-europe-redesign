import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "ces-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => { if (!localStorage.getItem(KEY)) setShow(true); }, []);
  if (!show) return null;
  const save = (a: boolean) => { localStorage.setItem(KEY, JSON.stringify({ necessary: true, analytics: a })); setShow(false); };
  return (
    <div role="dialog" aria-label="Cookie consent" className="inverse fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-deep">
      <div className="container-x flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-sm text-muted-foreground">
          <p>We use necessary cookies to run this site and, with your consent, analytics cookies to improve it.</p>
          {settings && (
            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-3"><input type="checkbox" checked disabled /> Necessary (always on)</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Analytics</label>
            </div>
          )}
        </div>
        <div className="flex shrink-0 gap-3">
          {settings ? (
            <Button variant="outline" onClick={() => save(analytics)}>Save settings</Button>
          ) : (
            <Button variant="outline" onClick={() => setSettings(true)}>Cookie Settings</Button>
          )}
          <Button onClick={() => save(true)}>Accept All</Button>
        </div>
      </div>
    </div>
  );
}
