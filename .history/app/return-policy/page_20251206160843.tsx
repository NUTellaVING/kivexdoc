"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function ReturnPolicy() {
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
                นโยบายการคืนสินค้า
              </h1>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                เรารับประกันความพึงพอใจของลูกค้า
                หากสินค้าที่ได้รับมีปัญหา คุณสามารถส่งคืนหรือเปลี่ยนสินค้าได้ภายใน 30 วัน
                ติดต่อทีมบริการลูกค้าของเราเพื่อขอความช่วยเหลือ
              </p>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/payment-methods">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
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
