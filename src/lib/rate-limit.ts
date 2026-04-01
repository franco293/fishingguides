/**
 * Simple in-memory sliding-window rate limiter.
 *
 * NOTE: This works correctly for single-process deployments (Node.js server,
 * Docker). For serverless / edge functions where each invocation gets a fresh
 * process, replace this with a Redis-backed solution (e.g. Upstash).
 */

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

/**
 * Returns true if the request is allowed, false if it should be rate-limited.
 * Automatically evicts expired entries to prevent unbounded memory growth.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Periodically evict stale entries (every ~1 in 50 calls)
  if (Math.random() < 0.02) {
    for (const [key, entry] of store.entries()) {
      if (now > entry.resetAt) store.delete(key);
    }
  }

  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}
