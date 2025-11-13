import type { RestaurantSummary } from "@chakula/shared";
import Link from "next/link";

const featuredRestaurants: RestaurantSummary[] = [
  {
    id: "maison-simba",
    name: "Maison Simba",
    address: "Golf Lukanga, Lubumbashi",
    coordinates: { lat: -11.660583, lng: 27.47937 },
    isOpen: true,
    cuisineTags: ["africain", "signature house"],
  },
  {
    id: "pasta-hub",
    name: "Pasta Hub",
    address: "Hyper Psaro, Lubumbashi",
    coordinates: { lat: -11.64661, lng: 27.46903 },
    isOpen: false,
    cuisineTags: ["italien", "fusion"],
  },
  {
    id: "city-burger",
    name: "City Burger",
    address: "Immeuble Congo Futur",
    coordinates: { lat: -11.66421, lng: 27.4852 },
    isOpen: true,
    cuisineTags: ["burger", "fast-good"],
  },
];

export default function Home() {
  return (
    <div className="bg-neutral-950 text-white">
      <header className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
          Chakula v0.1.0
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Base technique prête pour connecter les gourmands de Lubumbashi.
        </h1>
        <p className="text-lg text-neutral-300 sm:max-w-2xl">
          Next.js 16, Expo, NestJS et Prisma sont configurés avec TypeScript strict.
          Chaque app consommera les mêmes types partagés pour garantir une expérience
          cohérente sur mobile, web et dashboards.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://github.com/"
            className="rounded-full bg-amber-400 px-6 py-3 text-center text-base font-medium text-neutral-950 transition hover:bg-amber-300"
          >
            Voir la roadmap
          </Link>
          <Link
            href="/api/health"
            className="rounded-full border border-white/30 px-6 py-3 text-center text-base font-medium text-white transition hover:border-white"
          >
            Checker l&apos;API
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-10">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-2xl font-semibold">Restaurants pilotes</h2>
          <span className="text-sm text-neutral-400">
            Données mockées. Réel CRUD arrive en v0.3.0
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredRestaurants.map((restaurant) => (
            <article
              key={restaurant.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-widest text-amber-400">
                {restaurant.isOpen ? "Ouvert" : "Fermé"}
              </p>
              <h3 className="pt-2 text-xl font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-neutral-300">{restaurant.address}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-200">
                {restaurant.cuisineTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
