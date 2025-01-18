"use client";
import React from "react";
import Header from "../AppComponents/Header";
import {
  Box,
  Container,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

const cardData = [
  {
    name: "Image to Story",
    icon: "🖼️",
    description: "Transform your images into engaging stories.",
    url: "/ImgtoStory",
  },
  {
    name: "Image to poetry",
    icon: "🎧ྀི",
    description: "Create stunning poetry from your images.",
    url: "/ImgtoPoetry",
  },
  {
    name: "Image to Motivational Quote",
    icon: "💬",
    description: "Generate inspiring quotes from images.",
    url: "/ImgtoMotivation",
  },
];


export default function Page() {
  const { user } = useUser();

  return (
    <div>
      <Header />

      <Container maxW={"6xl"} py={5}>
        <Box mb={6} textAlign="center">
          <Heading fontSize={"3xl"} fontWeight={"700"}>
            Welcome, {user?.firstName}
          </Heading>
        </Box>

        <section className="mt-14 px-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cardData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <HStack justifyContent={"space-between"}>
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {feature.name}
                  </h4>
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                </HStack>
                <Heading fontWeight={"700"} fontSize={"3xl"}>
                  54
                </Heading>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section for Previously Created Cards */}
       
      </Container>
    </div>
  );
}
