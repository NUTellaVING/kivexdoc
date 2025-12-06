"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function PaymentShipping() {
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
                การชำระเงินและจัดส่ง
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                  เราดำเนินการตามขั้นตอนการจ่ายเงินและจัดส่งอย่างไรต่อเมื่อได้รับคำสั่งซื้อ:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                      วิธีการชำระเงิน
                    </h2>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• บัตรเครดิต/เดบิต (Visa, MasterCard)</li>
                      <li>• กระเป๋าอิเล็กทรอนิกส์ (True Money, PromptPay)</li>
                      <li>• บัญชีธนาคาร</li>
                      <li>• เงินสด (COD = จ่ายเงินสดตอนรับสินค้า)</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                      การจัดส่ง
                    </h2>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• รถส่งสินค้าในเขตเมือง (1-2 วัน)</li>
                      <li>• ไปรษณีย์ภายในประเทศ (2-5 วัน)</li>
                      <li>• บริการนำส่งด่วน (EMS)</li>
                      <li>• ติดตามพัสดุแบบเรียลไทม์</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/shopping-methods">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/payment-methods">
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
