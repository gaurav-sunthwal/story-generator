"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Box, VStack } from "@chakra-ui/react";
import { WavyBackground } from "@/components/ui/wavy-background";
import FlotingNav from "@/app/AppComponents/FlotingNav";

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
export default function page() {
  return (
    <WavyBackground className="w-full h-full">
      <VStack h={"100vh"} justifyContent={"center"} p={3}>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-md text-neutral-600 dark:text-neutral-400">
            {poetry}
          </p>
        </BackgroundGradient>
        <Box>
          <FlotingNav />
        </Box>
      </VStack>
    </WavyBackground>
  );
}
