"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { VStack } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

export default function OutlinePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const router  = useRouter()
  const params = useParams();
  const handleGenerate = () => {
    router.push(
      `/create/${params.createId}/${
        params.createId === "ImgtoStory"
          ? "story"
          : params.createId === "ImgtoPoetry"
          ? "poetry"
          : "motivation"
      }`
    );
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prevProgress + 10;
      });

    }, 500);

  };

  return (
    <div className="min-h-screen bg-background">
      <header className="p-4 border-b">
        <nav>
          <Link href="/create">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8 h-[80vh] overflow-scroll">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Outline
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {cards.map((card, index) => (
            <Card key={`card-${card.title}`}>
              <CardContent className="p-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        ></motion.div>
        <VStack>
          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="relative"
          >
            {isGenerating ? (
              <>
                Generating
                <span className="ml-2 inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
              </>
            ) : (
              <>
                Generate
                {progress === 100 && <Check className="ml-2 w-4 h-4" />}
              </>
            )}
          </Button>
          {isGenerating && (
            <div className="mt-4 max-w-md mx-auto">
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </VStack>
      </main>
    </div>
  );
}

const cards = [
  {
    title: "Introduction",
    description:
      "A computer is a machine that can be programmed to automatically carry out sequences of arithmetic or logical operations (computation). Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. The term computer system may refer to a nominally complete computer that includes the hardware, operating system, software, and peripheral equipment needed and used for full operation; or to a group of computers that are linked and function together, such as a computer network or computer cluster.",
  },
  {
    title: "Background",
    description:
      "Chapter Title: The Gourmet's Quest\nDescription: Driven by his passion, Marmalade sets out on a culinary quest, seeking rare and exotic ingredients to elevate his creations. The image's chef's hat becomes a symbol of his culinary ambition. His journey takes him through surreal landscapes mirrored in the smoky backdrop, his once-simple cooking evolving into a gourmet pursuit. His emotions mature from the image's initial curiosity into a determined ambition to create the ultimate dish, his feline instincts sharpened by his gourmet awakening",
  },
  {
    title: "Main Points",
    description: "Key arguments or ideas to be discussed",
  },
  {
    title: "Supporting Evidence",
    description: "Data, examples, or expert opinions",
  },
  {
    title: "Conclusion",
    description: "Summary of main points and final thoughts",
  },
];
