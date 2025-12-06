"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function GettingStarted() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">&larr; กลับหน้าแรก</Link>
            </div>

            <section>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                การเริ่มใช้งาน
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                  หากต้องการเริ่มใช้งาน Kivex Store คุณต้องทำตามขั้นตอนดังต่อไปนี้:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
