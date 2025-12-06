"use client"

import { ChevronRight, Mail, Phone, MessageSquare, Home as HomeIcon } from "lucide-react"
import Link from "next/link"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <header className="mb-12" id="home">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Kivex Store ข้อมูลและวิธีการใช้งาน
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                คู่มือการใช้งานสำหรับผู้ใช้อ้างอย่างครบถ้วน
              </p>
            </header>

            <main className="space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  บทนำ
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  วิธีการใช้งาน Kivex Store ง่ายๆมีรายการสินค้า วิธีการชำระเงิน และนโยบายการคืนสินค้าหรือคืนเงิน
                </p>
              </section>
            </main>

            <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
              <p>&copy; 2025 Kivex Store. สงวนลิขสิทธิ์ทุกประการ.</p>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
