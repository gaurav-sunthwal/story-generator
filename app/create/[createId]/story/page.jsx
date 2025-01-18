"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import HTMLFlipBook from "react-pageflip";

const data = {
  chapters: [
    {
      title: "The Whiskered Chef's Awakening",
      paragraphs: [
        {
          subtitle: "A Curious Awakening",
          content:
            "In the twilight realm of dreams, where culinary magic intertwined with feline curiosity, Marmalade, a ginger cat of extraordinary charm, stirred from his slumber. His world, once filled with the mundane comforts of naps and yarn balls, had transformed into a vibrant kitchen, alive with the intoxicating aromas of simmering sauces and exotic spices.",
        },
        {
          subtitle: "An Unlikely Chef",
          content:
            "Clad in a crisp chef's uniform, complete with a towering toque that perched precariously on his head, Marmalade found himself inexplicably drawn to the bubbling cauldron before him. The kitchen, shrouded in a smoky, otherworldly glow, mirrored the surreal nature of his transformation.",
        },
        {
          subtitle: "The Symphony of Flavors",
          content:
            "As he tentatively dipped a silver spoon into the savory concoction, a wave of both excitement and bewilderment washed over his whiskered face. The rich, earthy scent hinted at a mysterious blend of ingredients, a culinary puzzle he was eager to unravel.",
        },
        {
          subtitle: "An Awakening Talent",
          content:
            "With a gentle flick of his wrist, he brought the spoon to his lips, the taste igniting a symphony of flavors that danced upon his palate. Notes of roasted meats mingled with sweet undertones of honey and the subtle tang of citrus, creating an exquisite harmony that transcended the boundaries of feline cuisine.",
        },
        {
          subtitle: "The Calling of a Chef",
          content:
            "With newfound confidence, Marmalade grasped the ladle, his paws moving with an unexpected grace, stirring the bubbling contents of the cauldron with the practiced ease of a seasoned chef. The kitchen, once a place of mystery, now felt like home, a sanctuary where his feline instincts melded seamlessly with the art of gastronomy.",
        },
      ],
    },
    {
      title: "A Symphony of Flavors",
      paragraphs: [
        {
          subtitle: "A Culinary Revelation",
          content:
            "The aroma, a rich tapestry of earthy spices and simmering meat, wrapped around Marmalade like a warm embrace. He had been hesitant, his paw trembling as he dipped the spoon into the bubbling cauldron in the previous chapter. Now, as the broth touched his tongue, his eyes widened, a spark of pure culinary delight igniting within them.",
        },
        {
          subtitle: "A Newfound Passion",
          content:
            "The savory concoction, far from the bland gruel he'd anticipated, was an explosion of flavors, each ingredient singing its own unique note in a harmonious symphony. He tasted the deep, earthy undertones of mushrooms, the bright, tangy burst of sun-ripened tomatoes, and the subtle sweetness of caramelized onions, all dancing together in a perfectly balanced culinary ballet.",
        },
        {
          subtitle: "The Magic of Creation",
          content:
            "His instincts, honed over years of chasing butterflies and sniffing out hidden treats, now guided him in this new culinary adventure. He reached for the cracked eggshells depicted in the image, crushing them into fine powder between his claws. With a practiced flick of the wrist, he sprinkled the eggshell dust into the simmering broth.",
        },
        {
          subtitle: "The Final Touch",
          content:
            "With a steady paw, he carefully poured a few drops of shimmering, golden oil into the bubbling mixture. The kitchen air crackled with energy as the oil hit the broth, releasing a heady aroma that made Marmalade's whiskers twitch with anticipation. The broth deepened in color, taking on a rich, amber hue.",
        },
        {
          subtitle: "Master of Culinary Alchemy",
          content:
            "Marmalade, the once ordinary ginger cat, was now a culinary maestro, his every movement guided by an innate understanding of flavors and textures. He tasted the stew again, the spoon trembling slightly with excitement. It was perfect.",
        },
      ],
    },
    {
      title: "The Gourmet's Quest",
      paragraphs: [
        {
          subtitle: "A Hunger for the Extraordinary",
          content:
            "Marmalade, no longer just a kitchen cat but a culinary maestro, surveyed his domain. The once-familiar stove now seemed a stage, the pots and pans his orchestra. The lingering aroma of his last creation still danced in the air. But his heart yearned for more – the hunger for the extraordinary.",
        },
        {
          subtitle: "The Call to Adventure",
          content:
            "He envisioned dishes beyond the realm of ordinary feline cuisine. His mind swam with images of sun-dried tomatoes from the highest mountain peaks, saffron threads spun by desert spiders, and salt harvested from the tears of mermaids. He knew he must embark on a quest to gather the most exquisite ingredients the world had to offer.",
        },
        {
          subtitle: "Into the Unknown",
          content:
            "The kitchen began to dissolve, giving way to a surreal landscape of towering whisks and floating ladles. The air shimmered with anticipation as Marmalade stepped into the unknown, armed with a silver spoon and an unyielding spirit.",
        },
        {
          subtitle: "The Lunar Peppercorn",
          content:
            "After navigating through rivers of melted chocolate and climbing stairs of crystallized sugar, Marmalade reached the moon, where he found the legendary lunar peppercorn, shimmering with celestial spice. Its aroma filled him with inspiration, igniting a fire in his culinary soul.",
        },
        {
          subtitle: "The Feline Gourmand",
          content:
            "With each new ingredient, Marmalade's passion grew. He gathered star anise from floating constellations, harvested vanilla beans from volcanic orchids, and collected salt crystals from mermaid tears. He was no longer just Marmalade – he was Marmalade the Magnificent, purveyor of extraordinary tastes.",
        },
      ],
    },
  ],
  img: [
    {
      cover_art:
        "https://storage.googleapis.com/d6a651ac-9202-489e-af07-ef51b98c19e8-worqhat/image-gen/image-gen/qqIQ1omftbNZtUoFcQHZlz9bqtM2-1737221511172.png?GoogleAccessId=cloud-storage-prod%40worqhat-prod.iam.gserviceaccount.com&Expires=1752773512&Signature=X%2B%2FnlZjZDgSpwKK9zXcCA9ww%2FzTpjBI6PAqMncZ2dNvNWQWOoy0NAwUJW9P2xB4XiUrh2wvHHMAA%2BVHT0JpjnUr1X3X%2FaURMfZvAtQnDvLtVMBeuwekd0mGSMJHKIOwXCEHS6AW%2Fjeh3jFsdzgrBiZfsiD%2FuYsEvLr1V4aYwBT6ZtZ%2BSulMBCgpugQPyOk62Idyuw2a2S0S4hGRRsz6myAMRY0l7AaccKhYvlnkQWtMgd8m0zoU4ZLq%2BB%2FX35XM2HdJEFIIlG6LlDTkawT2hsHh2GZjNzhKW%2FPUNTsFGgr%2FOEHRPhmZo2n2BYNi%2BTbU4r4Cn9yNyKJ24ehK3BMtgsg%3D%3D",
    },
  ],
};

export default function AnimatedStoryBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const flipBookRef = useRef(null);

  const handleNextPage = () => {
    flipBookRef.current?.pageFlip().flipNext();
    setCurrentPage((prev) => Math.min(prev + 1, data.chapters.length));
  };

  const handlePrevPage = () => {
    flipBookRef.current?.pageFlip().flipPrev();
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" p-8 max-w-6xl w-full"
      >
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Marmalade's Culinary Adventures</h1> */}
        <div className="relative">
          <AnimatePresence>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
            >
              <HTMLFlipBook
                ref={flipBookRef}
                width={400}
                height={500}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1233}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="book-container shadow-2xl rounded-lg  overflow-scroll"
              >
                {/* Cover Page */}
                {data.img.map((item, index) => (
                  <div
                    key={`cover-${index}`}
                    className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white"
                  >
                    <Image
                      src={item.cover_art || "/placeholder.svg"}
                      alt="Cover page"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    
                  </div>
                ))}

                {/* Chapters */}
                {data.chapters.map((chapter, chapterIndex) => (
                  <div
                    key={chapterIndex}
                    className="p-6 bg-white text-gray-800 space-y-4 shadow-lg overflow-scroll"
                  >
                    <h2 className="text-2xl font-bold border-b border-gray-300 pb-2">
                      {chapter.title}
                    </h2>

                    {/* Paragraphs */}
                    {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                      <div
                        key={paragraphIndex}
                        className="space-y-2 border-l-4 border-indigo-500 pl-4"
                      >
                        <h3 className="text-xl font-semibold text-indigo-600">
                          {paragraph.subtitle}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {paragraph.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </HTMLFlipBook>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevPage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <FiArrowLeft size={24} className="text-gray-800" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextPage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <FiArrowRight size={24} className="text-gray-800" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
