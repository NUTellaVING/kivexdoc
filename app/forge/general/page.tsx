"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import Link from "next/link"
import Image from "next/image"
import { AlertCircle, Video, Clock, Shield } from "lucide-react"
import { PurchaseContact } from "@/components/purchase-contact"

export default function ForgeGeneralPage() {
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
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ไก่ตันทั่วไป
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                สินค้าจาก The Forge
              </p>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  รายละเอียดสินค้า
                </h2>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="https://r2.e-z.host/79f1dfbe-9f00-4424-b625-30ad40c4f239/9xkr67pe.png"
                    alt="ไก่ตันทั่วไป"
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  วิธีการสั่งซื้อ
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>ติดต่อผ่านช่องทางที่ระบุในหน้าติดต่อเรา</li>
                  <li>แจ้งรายละเอียดสินค้าที่ต้องการสั่งซื้อ</li>
                  <li>ทำการชำระเงินตามวิธีการที่กำหนด</li>
                  <li>รับสินค้าหลังจากชำระเงินเรียบร้อย</li>
                </ol>
              </section>

            </div>

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

            <PurchaseContact />

            <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
              <p>&copy; 2025 Kivex Store. สงวนลิขสิทธิ์ทุกประการ.</p>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}