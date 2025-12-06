"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function ShoppingMethods() {
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
                วิธีการช้อปปิ้ง
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                  การช้อปปิ้งใน Kivex Store นั้นทำได้ง่ายดาย
                  คุณสามารถค้นหาสินค้าได้หลายวิธีดังนี้:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>ใช้แถบค้นหาที่ด้านบนของหน้าเว็บ</li>
                  <li>เรียกดูหมวดหมู่สินค้าต่างๆ ในเมนูหลัก</li>
                  <li>ดูสินค้าแนะนำและโปรโมชั่นพิเศษ</li>
                  <li>กรองสินค้าตามราคา, ยี่ห้อ, หรือขนาด</li>
                </ul>
              </div>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/getting-started">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
