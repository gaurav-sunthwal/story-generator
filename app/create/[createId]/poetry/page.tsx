"use client";
import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BookOpen, Bookmark, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ColorModeButton } from "@/components/ui/color-mode";

const poetry = `
5 days a week, 7 hours a day.
Once I am home from school,
I do homework and study,
while looking at the trees as if they were dancing calmly.
I can smell my mom's amazing soup while doing homework.
School is not just hard work, it is fun.
It is fun because I get to do many activities.
And we learn at the same time.
I study so I can have a good future,
a good job, and be a good student.
Sometimes I think
ender the sun that sets on our final day,
we are smiling knowing
our hard work paid off for success in the future.
Our future selves will be us for the rest of our lives.
So make the best lives possible because
it is the best choice.
Was there anything I might have done for a better future?
Possibly, but it is as bright
as anything I would have ever imagined.
`;

export default function Page() {
  const [fontSize, setFontSize] = useState(16);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const wordCount = poetry.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  useEffect(() => {
    const handleMouseMove = () => {
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'School Days Poetry',
        text: poetry,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (

      <div className="relative min-h-screen flex flex-col items-center p-4">
        <nav className="w-full fixed top-0 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 shadow-lg backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Button variant="ghost" size="icon" className="mr-2">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <span className="text-lg font-medium">School Days</span>
                </Link>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <BookOpen className="h-4 w-4" />
                  <span>{readingTime} min read</span>
                </div>
                
                <div className="hidden sm:block w-32">
                  <Slider
                    value={[fontSize]}
                    min={12}
                    max={24}
                    step={1}
                    onValueChange={(value) => setFontSize(value[0])}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center gap-2">
               <ColorModeButton/>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={isBookmarked ? "text-yellow-500" : "text-zinc-700 dark:text-zinc-300"}
                  >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleShare}
                    className="text-zinc-700 dark:text-zinc-300"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <BackgroundGradient className="rounded-[22px] max-w-2xl p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto">
            <div 
              className={`prose dark:prose-invert max-w-none`}
              style={{ 
                fontSize: `${fontSize}px`,
                lineHeight: 1.8,
                whiteSpace: 'pre-wrap'
              }}
            >
              {poetry.split('\n').map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4 text-neutral-600 dark:text-neutral-400"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
  );
}