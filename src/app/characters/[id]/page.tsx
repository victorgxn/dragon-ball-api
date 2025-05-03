import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Character } from "@/app/interfaces/simple-character";
import CharacterCard from "@/components/character/character-card";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getCharacter(id: string): Promise<Character> {
  if (!process.env.NEXT_PUBLIC_DRAGON_BALL_API_URL) {
    throw new Error("API URL no configurada");
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DRAGON_BALL_API_URL}/characters/${id}`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data: Character = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const character = await getCharacter(id);
    const description =
      character.description.length > 160
        ? character.description.substring(0, 157) + "..."
        : character.description;

    return {
      title: `${character.name} | Dragon Ball Wiki`,
      description,
      openGraph: {
        title: `${character.name} | Dragon Ball Wiki`,
        description,
        images: [character.image],
      },
    };
  } catch {
    return {
      title: "Personaje no encontrado | Dragon Ball Wiki",
      description:
        "No se pudo encontrar la información del personaje solicitado.",
    };
  }
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;
  const character = await getCharacter(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link
            href="/characters"
            className="flex items-center"
            prefetch={false}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a personajes
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-4xl mx-auto py-8">
        <CharacterCard character={character} />
      </div>
    </div>
  );
}
