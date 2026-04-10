"use client";

import { useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Typography } from "poyraz-ui/atoms";
import promptsData from "@/data/prompts.json";

function HomeContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  const filteredCategories = useMemo(() => {
    return promptsData.filter((cat) => 
      cat.title.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase()) ||
      cat.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link key={category.slug} href={`/${category.slug}`} className="group">
            <Card variant="interactive" className="h-full flex flex-col group-hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
                <Typography variant="small" className="text-muted-foreground">{category.date}</Typography>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="line-clamp-3">
                  {category.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {category.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-20 bg-muted/30 rounded-lg border border-dashed">
          <Typography variant="muted">Aradığın kriterlere uygun bir içerik bulamadık.</Typography>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <HomeContent />
    </Suspense>
  );
}
