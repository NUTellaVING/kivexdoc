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
                รายการสินค้า: ไก่ตัน Bloxfruits
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                  เลือกหมวดหมู่สินค้าเพื่อดูรายละเอียด:
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <Link href="/shopping-methods/box" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
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
                <Link href="/payment-shipping">
                  ถัดไป
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
