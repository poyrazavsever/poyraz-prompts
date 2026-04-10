"use client";

import { use } from "react";
import Link from "next/link";
import { toast } from "poyraz-ui/molecules";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Typography, Separator } from "poyraz-ui/atoms";
import promptsData from "@/data/prompts.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  const category = promptsData.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="text-center py-20">
        <Typography variant="h3">İçerik Bulunamadı</Typography>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Prompt kopyalandı!", {
      description: "Artık istediğin yere yapıştırabilirsin."
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
        ← Geri Dön
      </Link>

      <section className="space-y-4">
        <Typography variant="h1" className="tracking-tight">{category.title}</Typography>
        <div className="flex flex-wrap gap-2">
          {category.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Typography variant="lead" className="text-muted-foreground">
          {category.description}
        </Typography>
      </section>

      <Separator />

      <div className="space-y-6">
        {category.prompts.map((prompt) => (
          <Card key={prompt.id} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="bg-muted/30 pb-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{prompt.title}</CardTitle>
                  <CardDescription>{prompt.description}</CardDescription>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => copyToClipboard(prompt.text)}
                  className="shrink-0"
                >
                  Kopyala
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <pre className="whitespace-pre-wrap font-mono text-sm bg-muted/50 p-4 rounded-md border text-foreground/90 selection:bg-primary/20">
                {prompt.text}
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
