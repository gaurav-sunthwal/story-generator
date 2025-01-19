"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";

export default function page() {
  return (
    <div>
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5" />
              <ColorModeButton />
            </div>
          </div>
        </div>
      </nav>
      <Box p={3}>
        <HoverEffect items={projects} />
      </Box>
    </div>
  );
}

const projects = [
  {
    title:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
