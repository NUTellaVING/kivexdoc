"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, AlertCircle, Video, Clock, Shield } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { PurchaseContact } from "@/components/purchase-contact"

export default function V4T10() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/products" className="text-sm text-blue-600 hover:text-blue-800">&larr; กลับไปหน้ารายการสินค้า</Link>
            </div>

            <section>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                ไก่ตันเผ่าV4 Tier 10
              </h1>
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  รายละเอียดสินค้า: ไก่ตันเผ่าที่มีระดับสูงสุด Tier 10 สำหรับ Bloxfruits
                </p>
                <div className="flex justify-center mt-6">
                  <img
                    src="https://img5.pic.in.th/file/secure-sv1/kv-rac-ev4.png"
                    alt="ไก่ตันเผ่าV4 Tier 10"
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    คำเตือนสำคัญเกี่ยวกับการบันทึกวิดีโอ
                  </h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <Video className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <p>
                        <strong>ต้องบันทึกวิดีโอทั้งหมด:</strong> เมื่อซื้อบัญชี คุณต้องบันทึกวิดีโอตั้งแต่ได้รับรายละเอียดบัญชีจากเราจนถึงหน้าเข้าสู่ระบบ Roblox สำเร็จ
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <p>
                        <strong>เวลาต้องตรงกัน:</strong> วิดีโอต้องแสดงเวลาจริงและไม่มีการตัดต่วน ต้องเห็นทุกขั้นตอนตั้งแต่เริ่มจนจบ
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p className="font-medium">ข้อสำคัญ:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>หากไม่มีวิดีโอหลักฐาน ถ้าบัญชีมีปัญหาเราไม่สามารถช่วยคุณได้</li>
                          <li>หากมีวิดีโอหลักฐานที่สมบูรณ์ เราจะให้บัญชีใหม่ (ไม่รับคืนเงิน)</li>
                          <li>วิดีโอต้องเห็นชัดเจนทุกขั้นตอนและข้อมูลที่สำคัญ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/bf/box">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/bf/others">
                  ถัดไป
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <PurchaseContact />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
