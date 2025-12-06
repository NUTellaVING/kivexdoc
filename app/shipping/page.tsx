"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, Package } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function Shipping() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-sm text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200">&larr; กลับหน้าแรก</Link>
            </div>

            <section>
              <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
                การจัดส่งบัญชี
              </h1>

              <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <Package className="h-6 w-6 text-black dark:text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                      ระยะเวลาจัดส่งบัญชี
                    </h3>
                    <p className="text-black dark:text-white">
                      เราจะส่งข้อมูลบัญชี <strong>ชื่อผู้ใช้และรหัสผ่าน</strong> ให้คุณภายใน <span className="font-bold text-xl">48 ชั่วโมง</span> หรือมากกว่าหลังการชำระเงินเรียบร้อย
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-medium text-black dark:text-white mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-black dark:text-white" />
                    ขั้นตอนการจัดส่ง
                  </h2>
                  <div className="space-y-3 text-black dark:text-white">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <p>ยืนยันการชำระเงิน</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <p>รอดำเนินการ <strong>(48 ชั่วโมงหรือมากกว่า)</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <p>รับข้อมูลบัญชี (ชื่อผู้ใช้และรหัสผ่าน)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <p>ตรวจสอบและใช้งานบัญชี</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-black dark:text-white mb-4">
                    หมายเหตุ
                  </h2>
                  <ul className="space-y-2 text-black dark:text-white">
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>อาจใช้เวลามากกว่า 48 ชั่วโมงในกรณีที่มีคำสั่งซื้อจำนวนมาก</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>เราจะแจ้งสถานะผ่านทาง Facebook เพจ Kivex Store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>กรุณาตรวจสอบข้อมูลบัญชีทันทีหลังได้รับ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>บันทึกวิดีโอตามคำเตือนที่หน้า Getting Started</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/fee-calculator">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/return-policy">
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
