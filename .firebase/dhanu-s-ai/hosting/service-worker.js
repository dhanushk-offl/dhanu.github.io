const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.472b18cf.js",
  e + "/_app/immutable/chunks/0.5896ec21.js",
  e + "/_app/immutable/chunks/1.1f49d5c9.js",
  e + "/_app/immutable/chunks/2.bd459020.js",
  e + "/_app/immutable/chunks/3.519a4ce9.js",
  e + "/_app/immutable/chunks/global.e0d9af68.js",
  e + "/_app/immutable/assets/global.7471397e.css",
  e + "/_app/immutable/chunks/index.9208791c.js",
  e + "/_app/immutable/chunks/index.b640c23f.js",
  e + "/_app/immutable/entry/start.cf044436.js",
  e + "/_app/immutable/entry/_error.svelte.295c089f.js",
  e + "/_app/immutable/entry/_layout.svelte.5de58b04.js",
  e + "/_app/immutable/assets/_page.6425e49c.css",
  e + "/_app/immutable/entry/_page.svelte.5e124756.js",
  e + "/_app/immutable/assets/_page.05f8375e.css",
  e + "/_app/immutable/entry/about-page.svelte.727d3fa6.js"
], m = [
  e + "/prepare.sh",
  e + "/robots.txt",
  e + "/site.webmanifest",
  e + "/sitemap.xml"
], o = "1718523173031", c = self, p = `cache${o}`, l = h.concat(m), u = new Set(l);
c.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(p).then((s) => s.addAll(l)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function b(t) {
  const s = await caches.open(`offline${o}`);
  try {
    const a = await fetch(t);
    return s.put(t, a.clone()), a;
  } catch (a) {
    const n = await s.match(t);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const s = new URL(t.request.url), a = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, i = s.host === self.location.host && u.has(s.pathname), r = t.request.cache === "only-if-cached" && !i;
  a && !n && !r && t.respondWith(
    (async () => i && await caches.match(t.request) || b(t.request))()
  );
});
