"use client";

import { useMemo, useState } from "react";
import type { BlogPost, Locale } from "@/lib/types";
import { localizedContent } from "@/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";
import { Footer } from "@/components/sections/Footer";

type Props = {
  posts: readonly BlogPost[];
};

export function Portfolio({ posts }: Props) {
  const [locale, setLocale] = useState<Locale>("ko");
  const t = useMemo(() => localizedContent[locale], [locale]);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10">
        <Header locale={locale} onLocaleChange={setLocale} nav={t.nav} />

        <Hero hero={t.hero} />
        <About about={t.about} />
        <Experience experience={t.experience} />
        <Projects projects={t.projects} />
        <Skills skills={t.skills} />
        <Writing writing={t.writing} posts={posts} />
        <Footer footer={t.footer} />
      </div>
    </main>
  );
}
