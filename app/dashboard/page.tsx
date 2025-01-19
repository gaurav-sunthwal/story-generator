"use client";
import React from "react";
import Header from "../AppComponents/Header";
import { PlusCircle, Activity, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const cardData = [
  {
    name: "Image to Story",
    icon: "✍️",
    description: "Transform your images into engaging stories.",
    url: "create/ImgtoStory",
    count: 54,
  },
  {
    name: "Image to Poetry",
    icon: "🖋️",
    description: "Create stunning poetry from your images.",
    url: "create/ImgtoPoetry",
    count: 32,
  },
  {
    name: "Image to Caption",
    icon: "📚📖",
    description: "Generate Caption from images.",
    url: "create/ImgtoCaption",
    count: 28,
  },
];

const recentActivity = [
  {
    type: "Story",
    title: "Sunset at the Beach",
    date: "2 hours ago",
    status: "completed",
  },
  {
    type: "Poetry",
    title: "Mountain Landscape",
    date: "5 hours ago",
    status: "completed",
  },
  {
    type: "Quote",
    title: "City Lights",
    date: "1 day ago",
    status: "completed",
  },
];

export default function Page() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {user?.firstName}
            </h1>
            <p className="text-muted-foreground mt-1">
              {`   Ready to bring your next idea to life?`}
            </p>
          </div>
          <Link href={"/create"}>
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              New Creation
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cardData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Link href={feature.url}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {feature.name}
                    </CardTitle>
                    <span className="text-2xl">{feature.icon}</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{feature.count}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="activity" className="space-y-4">
          <TabsList>
            <TabsTrigger value="activity" className="gap-2">
              <Activity className="h-4 w-4" />
              Recent Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {recentActivity.map((activity, index) => (
                    <></>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your content creation analytics and trends will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>Content Library</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your saved and generated content will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
