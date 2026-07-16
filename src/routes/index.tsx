import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const lodella = { url: "/products/lodella.png" };
const cherubic = { url: "/products/cherubic.png" };
const drschatz = { url: "/products/drschatz.png" };

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: lodella.url },
      { name: "twitter:image", content: lodella.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WA_URL =
  "https://wa.me/6281397029988?text=Halo%20Admin%20MK%20Store%20Medan%20%F0%9F%91%8B%0A%0ASaya%20ingin%20membeli%20skincare.%20Mohon%20bantu%20rekomendasikan%20produk%20yang%20sesuai%20dengan%20kondisi%20kulit%20saya%20beserta%20informasi%20harga%20dan%20cara%20pemakaiannya.%20Terima%20kasih&utm_source=meta_ads&utm_medium=cpc&utm_campaign=wa_consultation&utm_content=website_direct";

function trackContact() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
}

type Product = {
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  shopee: string;
  benefits: string[];
};

const products: Product[] = [
  {
    name: "Lodella SP12",
    tagline: "All In One Essence Booster · 5 in 1",
    description:
      "Serum, toner, lotion, eye nourishing & moisture cream dalam satu botol. Diperkaya 12 Peptides, 17 Amino Acids, dan Niacinamide untuk kulit anti-aging dan glowing.",
    price: "Rp 1.994.050",
    image: lodella.url,
    shopee: "https://s.shopee.co.id/gOGkzuUTy",
    benefits: ["12 Peptides", "17 Amino Acids", "Niacinamide", "Anti-Aging"],
  },
  {
    name: "Cherubic Facial Wash",
    tagline: "Liquid Soap Cleanser · Brightening & Anti Aging",
    description:
      "Sabun wajah berbentuk foam yang sangat gentle, hypoallergenic tested, dengan ekstrak apel asli dari Korea. Aman untuk semua jenis kulit — dari anak-anak hingga lansia.",
    price: "Rp 775.000",
    image: cherubic.url,
    shopee: "https://s.shopee.co.id/6AjED8HfXC",
    benefits: ["Ekstrak Apel Asli", "Hypoallergenic", "BPOM", "Gentle Foam"],
  },
  {
    name: "Dr.Schatz Apple Stem Cell Mask",
    tagline: "Revive Your Skin, Reveal Your Radiance",
    description:
      "Masker phyto cell dengan Apple Stem Cell, Licorice Extract & Aloe Vera. Mengurangi garis halus, meningkatkan elastisitas, dan mencerahkan kulit kusam.",
    price: "Rp 360.000",
    image: drschatz.url,
    shopee: "https://s.shopee.co.id/40epxsbFZT",
    benefits: ["Apple Stem Cell", "Licorice Extract", "Aloe Vera", "5 pcs / box"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2a2419]">
      <header className="sticky top-0 z-40 border-b border-[#e8dfd0] bg-[#faf7f2]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight">MK Store</span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a08a5c]">Medan</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#products" className="hover:text-[#a08a5c]">Produk</a>
            <a href="#why" className="hover:text-[#a08a5c]">Kenapa Kami</a>
            <a href="#contact" className="hover:text-[#a08a5c]">Kontak</a>
          </nav>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="rounded-full bg-[#1e3a2b] px-5 py-2 text-sm font-medium text-[#faf7f2] transition hover:bg-[#2a5140]"
          >
            Pesan via WA
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#8a6e2a]">
              Skincare Premium · Medan
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Kulit sehat dan bercahaya, mulai dari rutinitas pilihan.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5a4f3e] md:text-lg">
              MK Store Medan menghadirkan skincare premium terpercaya —
              <span className="text-[#2a2419]"> Lodella</span>,
              <span className="text-[#2a2419]"> Cherubic</span>, dan
              <span className="text-[#2a2419]"> Dr.Schatz</span>. Konsultasi kondisi kulitmu langsung dengan admin kami.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} className="rounded-full bg-[#1e3a2b] px-7 py-3 text-sm font-medium text-[#faf7f2] transition hover:bg-[#2a5140]">
                Konsultasi Gratis
              </a>
              <a href="#products" className="rounded-full border border-[#2a2419]/20 px-7 py-3 text-sm font-medium text-[#2a2419] transition hover:border-[#2a2419]">
                Lihat Produk
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-[#8a7a5c]">
              <span>✓ 100% Original</span>
              <span>✓ Terdaftar BPOM</span>
              <span>✓ Kirim Se-Indonesia</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#f3e6c9] via-[#faf7f2] to-[#e5ecd9] blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={lodella.url} alt="Lodella Essence Booster" className="col-span-2 h-72 w-full rounded-2xl object-cover shadow-xl md:h-96" />
              <img src={cherubic.url} alt="Cherubic Facial Wash" className="h-44 w-full rounded-2xl object-cover shadow-lg md:h-56" />
              <img src={drschatz.url} alt="Dr.Schatz Apple Stem Cell Mask" className="h-44 w-full rounded-2xl object-cover shadow-lg md:h-56" />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-[#e8dfd0] bg-[#f5efe4]/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a08a5c]">Katalog</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Produk pilihan MK Store</h2>
            <p className="mt-4 text-[#5a4f3e]">Tiga brand skincare terpercaya, dikurasi untuk kebutuhan kulit sehat, cerah, dan awet muda.</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "100% Original", d: "Semua produk dikirim langsung dari distributor resmi. Tidak ada KW." },
            { t: "Konsultasi Personal", d: "Admin siap membantu memilih produk yang tepat untuk kondisi kulitmu." },
            { t: "Pengiriman Cepat", d: "Dikirim dari Medan ke seluruh Indonesia dengan pengemasan aman." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-[#e8dfd0] bg-white p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a84c]/15 text-[#8a6e2a]">✦</div>
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-[#5a4f3e]">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#e8dfd0] bg-[#1e3a2b] text-[#faf7f2]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Belum yakin produk mana yang cocok?</h2>
          <p className="mt-4 text-[#d8d0bb]">Chat admin MK Store Medan untuk konsultasi gratis. Kami bantu rekomendasikan produk sesuai kondisi kulitmu.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#1e3a2b] transition hover:bg-[#dbbe6b]">
            Chat via WhatsApp →
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e8dfd0] bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#5a4f3e] md:flex-row">
          <p>© {new Date().getFullYear()} MK Store Medan. All rights reserved.</p>
          <p>Skincare Premium · Lodella · Cherubic · Dr.Schatz</p>
        </div>
      </footer>

      <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} aria-label="Chat via WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
      </a>

      <noscript>
        <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1325108846469523&ev=PageView&noscript=1" alt="" />
      </noscript>
    </div>
  );
}