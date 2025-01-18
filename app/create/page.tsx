"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function CreateStory() {
  const cardData = [
    {
      name: "Image to Story",
      icon: "🖼️",
      description: "Transform your images into engaging stories.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Image to Post",
      icon: "📤",
      description: "Create stunning posts from your images.",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      name: "Image to Motivational Quote",
      icon: "💬",
      description: "Generate inspiring quotes from images.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Create with AI
              </h1>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground">
              Discover the power of AI in creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative p-6 flex flex-col justify-between">
                    <div className="mb-4 text-4xl">{card.icon}</div>
                    <h2 className="text-2xl font-semibold mb-2">{card.name}</h2>
                    <p className="text-muted-foreground">{card.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}