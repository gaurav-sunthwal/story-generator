"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Menu,
  BookOpen,
  ChevronRight,
  Home,
  ArrowLeft,
  ArrowRight,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

export default function page() {
  return (
    <div>
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
               
              </Sheet>
            </div>
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium">
               
              </span>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <HoverEffect items={projects} />
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
