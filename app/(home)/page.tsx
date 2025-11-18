import { BlogFooter } from "@/components/home/blog-footer";
import { Navbar } from "@/components/home/header/navbar";

import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              Featured Articles
            </h2>
            <p>Discover our most popular and trending content</p>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <TopArticles />
          </Suspense>
          <div className="text-center mt-12">
            <Link href={"/articles"}>
              <Button className="rounded-full hover:text-white dark:bg-white dark:hover:text-gray-900">
                View all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter/>
    </div>
  );
}
