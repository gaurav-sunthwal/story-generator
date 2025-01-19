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
import { ColorModeButton } from "@/components/ui/color-mode";

const data = {
  chapters: [
    {
      content:
        "In the twilight realm of dreams, where culinary magic intertwined with feline curiosity, Marmalade, a ginger cat of extraordinary charm, stirred from his slumber. His world, once filled with the mundane comforts of naps and yarn balls, had transformed into a vibrant kitchen, alive with the intoxicating aromas of simmering sauces and exotic spices. Clad in a crisp chef's uniform, complete with a towering toque that perched precariously on his head, Marmalade found himself inexplicably drawn to the bubbling cauldron before him. The kitchen, shrouded in a smoky, otherworldly glow, mirrored the surreal nature of his transformation. As he tentatively dipped a silver spoon into the savory concoction, a wave of both excitement and bewilderment washed over his whiskered face. The rich, earthy scent hinted at a mysterious blend of ingredients, a culinary puzzle he was eager to unravel. With a gentle flick of his wrist, he brought the spoon to his lips, the taste igniting a symphony of flavors that danced upon his palate. Notes of roasted meats mingled with sweet undertones of honey and the subtle tang of citrus, creating an exquisite harmony that transcended the boundaries of feline cuisine. As he savored the lingering taste, a spark of understanding ignited within him. This was no ordinary culinary adventure; this was a journey of self-discovery, an awakening of a hidden talent that lay dormant within his ginger soul. With newfound confidence, Marmalade grasped the ladle, his paws moving with an unexpected grace, stirring the bubbling contents of the cauldron with the practiced ease of a seasoned chef. The kitchen, once a place of mystery, now felt like home, a sanctuary where his feline instincts melded seamlessly with the art of gastronomy. He added a pinch of star anise, a dash of smoked paprika, and a sprig of fresh thyme, each addition enhancing the complexity of the brew, guided by an intuitive sense of balance and harmony. In this ethereal realm of culinary dreams, Marmalade, the whiskered chef, had found his calling, transforming ordinary ingredients into extraordinary culinary masterpieces, one purrfectly seasoned dish at a time. The dark, smoky backdrop of the kitchen, illuminated by the warm glow of the stove, served as a canvas for his artistic expression, each dish a testament to his newfound culinary prowess. Marmalade, the cat who once dreamt of chasing mice and napping in sunbeams, now dreamt of Michelin stars and culinary accolades, his world forever changed by the awakening of his whiskered chef persona.",
      title: "The Whiskered Chef's Awakening",
    },
    {
      content:
        "The aroma, a rich tapestry of earthy spices and simmering meat, wrapped around Marmalade like a warm embrace.  He had been hesitant, his paw trembling as he dipped the spoon into the bubbling cauldron in the previous chapter. Now, as the broth touched his tongue, his eyes widened, a spark of pure culinary delight igniting within them. It was a revelation.  The savory concoction, far from the bland gruel he’d anticipated, was an explosion of flavors, each ingredient singing its own unique note in a harmonious symphony. He tasted the deep, earthy undertones of mushrooms, the bright, tangy burst of sun-ripened tomatoes, and the subtle sweetness of caramelized onions, all dancing together in a perfectly balanced culinary ballet.\n\nThe smoky, dimly lit room from his initial awakening was now awash in a warm, inviting glow, transforming into a vibrant kitchen bustling with culinary possibilities. The cauldron, once a mysterious vessel, felt familiar under his paw.  He looked at the image's depiction of himself, the focused expression mirroring his own newfound passion. It was no longer a surreal, confusing image but a reflection of his awakening talent.\n\nHis instincts, honed over years of chasing butterflies and sniffing out hidden treats, now guided him in this new culinary adventure. He reached for the cracked eggshells depicted in the image, crushing them into fine powder between his claws. With a practiced flick of the wrist, he sprinkled the eggshell dust into the simmering broth, a trick he somehow knew would add a delicate, almost imperceptible richness to the dish. He then added a pinch of vibrant saffron, the spice's golden hue echoing the rich color of his fur, followed by a generous dash of cinnamon, filling the kitchen with its warm, comforting scent.\n\nHis attention shifted to the glass beaker filled with a shimmering, golden oil. The image had captured its mysterious allure, and now, he understood its purpose. It was an elixir, a magical concoction that would elevate his stew to unimaginable heights. With a steady paw, he carefully poured a few drops of the oil into the bubbling mixture.  The kitchen air crackled with energy as the oil hit the broth, releasing a heady aroma that made Marmalade's whiskers twitch with anticipation.  He stirred the stew, his movements precise and rhythmic, a symphony of whisks and stirs creating a culinary masterpiece.  The broth deepened in color, taking on a rich, amber hue, and the aroma intensified, filling the room with an intoxicating blend of spices and simmering meat.\n\nMarmalade, the once ordinary ginger cat, was now a culinary maestro, his every movement guided by an innate understanding of flavors and textures. He tasted the stew again, the spoon trembling slightly with excitement. It was perfect.  He closed his eyes, savoring the symphony of flavors dancing on his tongue, a sense of accomplishment washing over him. He was no longer just Marmalade; he was Marmalade, the Whiskered Chef, master of culinary alchemy.",
      title: "A Symphony of Flavors",
    },
    {
      content:
        "Marmalade, no longer just a kitchen cat but a culinary maestro, surveyed his domain. The once-familiar stove now seemed a stage, the pots and pans his orchestra. The lingering aroma of his last creation, a symphony of flavors born from eggshells, spices, and that peculiar oil, still danced in the air. But his heart yearned for more. He had tasted the magic, felt the thrill of creation, and now, a new hunger gnawed at him – the hunger for the extraordinary.\nThe chef's hat, once a playful accessory, now sat firmly on his head, a symbol of his ambition.  He envisioned dishes beyond the realm of ordinary feline cuisine. His mind swam with images of sun-dried tomatoes from the highest mountain peaks, saffron threads spun by desert spiders, and salt harvested from the tears of mermaids. He knew, with unwavering certainty, that he must embark on a quest, a culinary pilgrimage to gather the most exquisite ingredients the world had to offer.\nThe kitchen, his haven of culinary exploration, began to dissolve. The smoky backdrop of his previous experiments swirled and morphed, the familiar walls giving way to a surreal landscape of towering whisks and floating ladles. The air shimmered with anticipation as Marmalade, armed with a silver spoon and an unyielding spirit, stepped into the unknown. His paws, once content to knead dough, now itched to traverse treacherous terrains and scale culinary heights.\nHis journey began in a forest of giant herbs, their leaves rustling with whispers of forgotten recipes. Here, he encountered a wise old owl, the keeper of ancient culinary secrets. The owl, perched on a branch of fragrant rosemary, spoke of a legendary peppercorn said to grow only on the moon. Intrigued, Marmalade set his sights on the celestial body, his feline agility enhanced by his newfound purpose.\nHe climbed a stairway made of crystallized sugar, each step echoing with the crunch of candied dreams. He navigated through a river of melted chocolate, its sweet currents testing his resolve. And finally, bathed in the ethereal glow of the moon, he found it – the lunar peppercorn, shimmering with a celestial spice. Its aroma, unlike anything he had ever encountered, filled him with inspiration, igniting a fire in his culinary soul.\nWith the lunar peppercorn secured, Marmalade continued his quest, each new ingredient adding a layer of complexity to his vision. He gathered star anise from a constellation of floating spices, harvested vanilla beans from orchids that bloomed in the heart of a volcano, and collected salt crystals from a hidden cave where the tears of mermaids had formed a shimmering pool. Each encounter, each discovery, further fueled his passion, transforming him from a curious cook into a true gourmet artist.\nAs his journey progressed, the image of the simple kitchen cat faded, replaced by the silhouette of a determined chef, his eyes gleaming with culinary fire.  He was no longer just Marmalade; he was Marmalade the Magnificent, the purveyor of extraordinary tastes, the feline gourmand whose quest had just begun.",
      title: "The Gourmet's Quest",
    }
  ],
  "cover_art": "https://storage.googleapis.com/d6a651ac-9202-489e-af07-ef51b98c19e8-worqhat/image-gen/image-gen/qqIQ1omftbNZtUoFcQHZlz9bqtM2-1737221511172.png?GoogleAccessId=cloud-storage-prod%40worqhat-prod.iam.gserviceaccount.com&Expires=1752773512&Signature=X%2B%2FnlZjZDgSpwKK9zXcCA9ww%2FzTpjBI6PAqMncZ2dNvNWQWOoy0NAwUJW9P2xB4XiUrh2wvHHMAA%2BVHT0JpjnUr1X3X%2FaURMfZvAtQnDvLtVMBeuwekd0mGSMJHKIOwXCEHS6AW%2Fjeh3jFsdzgrBiZfsiD%2FuYsEvLr1V4aYwBT6ZtZ%2BSulMBCgpugQPyOk62Idyuw2a2S0S4hGRRsz6myAMRY0l7AaccKhYvlnkQWtMgd8m0zoU4ZLq%2BB%2FX35XM2HdJEFIIlG6LlDTkawT2hsHh2GZjNzhKW%2FPUNTsFGgr%2FOEHRPhmZo2n2BYNi%2BTbU4r4Cn9yNyKJ24ehK3BMtgsg%3D%3D"
};

export default function StoryViewer() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const nextChapter = () => {
    if (selectedChapter < data.chapters.length - 1) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  const previousChapter = () => {
    if (selectedChapter > 0) {
      setSelectedChapter(selectedChapter - 1);
    }
  };

  return (
    <div className="flex h-auto bg-background">
      {/* Left Side - Fixed Image */}
      <div className="w-1/2 h-auto relative">
        <div className="fixed w-1/2 h-full">
          <Image
            src={data.cover_art}
            alt="Story illustration"
            layout="fill"
            objectFit="cover"
            className={cn(
              "transition-transform duration-500",
              isImageEnlarged ? "scale-110" : "scale-100"
            )}
            onClick={() => setIsImageEnlarged(!isImageEnlarged)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Chapter Navigation Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
            <Button
              variant="secondary"
              className=" text-white"
              onClick={previousChapter}
              disabled={selectedChapter === 0}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>
            <Button
              className=" text-white"
              onClick={nextChapter}
              disabled={selectedChapter === data.chapters.length - 1}
            >
              Next
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-1/2 h-auto">
        {/* Navigation Bar */}
        <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
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
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="py-4">
                      <h2 className="text-lg font-semibold mb-4">Chapters</h2>
                      <ScrollArea className="">
                        {data.chapters.map((chapter, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Button
                              variant="ghost"
                              className={cn(
                                "w-full justify-start text-left mb-2",
                                selectedChapter === index && ""
                              )}
                              onClick={() => setSelectedChapter(index)}
                            >
                              <ChevronRight className="h-4 w-4 mr-2" />
                              {chapter.title}
                            </Button>
                          </motion.div>
                        ))}
                      </ScrollArea>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="flex items-center space-x-4">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Chapter {selectedChapter + 1}
                </span>
                <ColorModeButton/>
              </div>
            </div>
          </div>
        </nav>

        {/* Story Content */}
        <div className="px-8 py-6 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${selectedChapter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">
                  {data.chapters[selectedChapter].title}
                </h1>
                <div className="h-1 w-20  bg-blue-500 rounded-full" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-lg p-6 shadow-lg border"
              >
                <p className="text-card-foreground leading-relaxed">
                  {data.chapters[selectedChapter].content}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
