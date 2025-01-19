"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FileUpload } from "@/components/ui/file-upload";
import { Textarea } from "@/components/ui/textarea";
import { useRouter, useParams } from "next/navigation";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Page() {
  const [files, setFiles] = useState<File[]>([]); // Files state is used in handleFileUpload and removeFile functions
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [step, setStep] = useState(1); // Track step (1: Upload, 2: Genre Selection)
  const [description, setDescription] = useState(""); // Added description state
  const [selectedMood, setSelectedMood] = useState<string[] | null>(null); // Added selectedMood state
  const [storyLength, setStoryLength] = useState<string | null>(null); // Added storyLength state
  const [color, setColor] = useState<string | null>(null); // Added color
  const router = useRouter();
  const params = useParams();
  const MOOD_OPTIONS = [
    {
      id: "cyberpunk",
      title: "Cyberpunk",
      description: "High-tech, neon-lit dystopian future",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "mythical",
      title: "Mythical",
      description: "Legendary creatures and magical realms",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "horror",
      title: "Horror",
      description: "Dark, eerie and spine-chilling",
      color: "from-gray-900 to-red-900",
    },
    {
      id: "detective",
      title: "Detective",
      description: "Film noir style mystery and intrigue",
      color: "from-gray-700 to-blue-900",
    },
    {
      id: "ancient",
      title: "Ancient",
      description: "Historical and classical themes",
      color: "from-amber-700 to-yellow-600",
    },
    {
      id: "comedy",
      title: "Comedy",
      description: "Light-hearted and humorous",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "culinary",
      title: "Culinary",
      description: "Food and cooking themed",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "chef",
      title: "Chef",
      description: "Professional kitchen and cooking",
      color: "from-red-500 to-orange-500",
    },
  ];

  const handleNext = () => {
    if (step === 1) {
      setLoading(true);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setLoading(false);
            setStep(2); // Move to genre selection after upload
            return 0;
          }
          return prev + 20;
        });
      }, 300);
    } else if (step === 2) {
      setStep(3); // Move to story length selection
    } else if (step === 3) {
      const storyData = {
        files,
        description,
        selectedMood,
        storyLength,
        color,
      };
      console.log("Generate", storyData);
      router.push(
        `/create/${params.createId}/${
          params.createId === "ImgtoStory"
            ? "story"
            : params.createId === "ImgtoPoetry"
            ? "poetry"
            : "motivation"
        }`
      );
      localStorage.setItem("imgtoStory", JSON.stringify(storyData));
    }
  };

  const handleFileUpload = (files: File[]) => {
    setFiles(files);

    // Create preview URLs for images
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => {
      // Clean up old preview URLs
      prev.forEach((url) => URL.revokeObjectURL(url));
      return newPreviews;
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => {
      const newPreviews = prev.filter((_, i) => i !== index);
      URL.revokeObjectURL(prev[index]);
      return newPreviews;
    });
  };

  // const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   console.log("Selected Genre:", event.target.value);
  // };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-4xl mx-auto px-4 py-8 z-100">
        <div className="mb-8">
          <Link href="/create">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>

        <Card className="p-8 shadow-lg rounded-lg z-20">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold">Generate</h1>
            <p className="text-gray-400">
              What would you like to create today?
            </p>
          </motion.div>

          <div className="space-y-6 z-40">
            {step === 1 && previews.length === 0 ? (
              <FileUpload onChange={handleFileUpload} />
            ) : step === 1 && previews.length > 0 ? (
              <motion.div
                className="w-full h-full flex justify-center items-center"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {previews.map((preview, index) => (
                  <motion.div
                    key={index}
                    className="relative group w-[300px] h-[300px] flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={preview}
                      width={300}
                      height={300}
                      alt={`Preview ${index + 1}`}
                      className="object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 p-1 bg-gray-900/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            ) : step === 2 ? (
              <>
                <motion.div
                  key="options"
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Describe your idea
                    </h3>
                    <Textarea
                      placeholder="Describe what you want to create..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Select a mood</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {MOOD_OPTIONS.map((mood) => (
                      <motion.div
                        key={mood.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card
                        className={cn(
                          "p-4 cursor-pointer transition-all hover:shadow-lg bg-gradient-to-r",
                          mood.color,
                          selectedMood?.includes(mood.id)
                          ? "ring-2 ring-primary"
                          : "hover:ring-1 hover:ring-primary/50"
                        )}
                        onClick={() => {
                          setSelectedMood((prev) =>
                          prev?.includes(mood.id)
                            ? prev.filter((id) => id !== mood.id)
                            : [...(prev || []), mood.id]
                          );
                          setColor(mood.color);
                        }}
                        >
                        <h4 className="font-semibold text-center">{mood.title}</h4>
                        </Card>
                      </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            ) : step === 3 ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Length of story</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {["Short", "Medium", "Long"].map((length) => (
                    <motion.div
                      key={length}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card
                        className={cn(
                          "p-4 cursor-pointer transition-all hover:shadow-lg",
                          storyLength === length.toLowerCase()
                            ? "ring-2 ring-primary"
                            : "hover:ring-1 hover:ring-primary/50"
                        )}
                        onClick={() => setStoryLength(length.toLowerCase())}
                      >
                        <div className="h-32 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                          <h4 className="text-white font-semibold">{length}</h4>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null}

            {loading && (
              <div className="mt-6">
                <Progress value={progress} className="w-full" />
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <Button
                onClick={handleNext}
                disabled={loading || (step === 1 && previews.length === 0)}
              >
                {step === 1 ? "Upload Files" : step === 2 ? "Next" : "Generate"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
