"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function Box() {
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
                ไก่ตันผลในกล่อง
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  รายละเอียดสินค้า: ไก่ตันที่มาในรูปแบบผลไม้ในกล่องสำหรับ Bloxfruits
                  ตัวอย่างสินค้าจริงๆ จะแสดงไว้ข้างล่าง
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded mb-3 flex items-center justify-center">
                        <span className="text-gray-500">รูปสินค้า {i}</span>
