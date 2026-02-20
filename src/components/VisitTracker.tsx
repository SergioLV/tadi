'use client';

import { useEffect } from 'react';
import { API } from '@/config/api';
const SECRET = 'eup-k3y-2025-s4lt!';

async function deriveKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(SECRET), { name: 'PBKDF2' }, false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: enc.encode('eligeunplan'), iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );
}

async function encrypt(data: string): Promise<{ d: string; iv: string }> {
  const key = await deriveKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv }, key, new TextEncoder().encode(data)
  );
  return {
    d: btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(encrypted)))),
    iv: btoa(String.fromCharCode.apply(null, Array.from(iv))),
  };
}

function getUTM(): Record<string, string> {
  const p: Record<string, string> = {};
  try {
    const sp = new URLSearchParams(window.location.search);
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      const v = sp.get(k);
      if (v) p[k] = v;
    }
  } catch { /* */ }
  return p;
}

export default function VisitTracker() {
  useEffect(() => {
    (async () => {
      try {
        const conn = ((navigator as unknown as Record<string, unknown>).connection || {}) as Record<string, unknown>;

        const payload = {
          ua: navigator.userAgent,
          ref: document.referrer || 'direct',
          url: window.location.href,
          sw: window.screen.width,
          sh: window.screen.height,
          vw: window.innerWidth,
          vh: window.innerHeight,
          lang: navigator.language,
          plat: navigator.platform || 'unknown',
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          touch: navigator.maxTouchPoints || 0,
          cores: navigator.hardwareConcurrency || 0,
          cookies: navigator.cookieEnabled,
          net: (conn.effectiveType as string) || 'unknown',
          utm: getUTM(),
          ts: new Date().toISOString(),
        };

        const encrypted = await encrypt(JSON.stringify(payload));

        fetch(API.visit, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(encrypted),
        }).catch(() => {});
      } catch { /* silent */ }
    })();
  }, []);

  return null;
}
