"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, AlertCircle, Video, Clock, Shield } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function GettingStarted() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
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
                  การเริ่มใช้งาน Kivex Store คุณสามารถติดต่อผ่านเพจ Facebook "Kivex store" เพื่อขอเป็นการสั่งซื้อสินค้าหรือสอบถามข้อมูลเพิ่มเติม
                </p>
                <div className="flex justify-center mb-6">
                  <img
                    src="https://r2.e-z.host/79f1dfbe-9f00-4424-b625-30ad40c4f239/r161sa2p.png"
                    alt="Kivex Store"
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="https://www.facebook.com/p/Kivex-Store-61567662266120/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                      Facebook
                    </Link>
                  </Button>
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
                <Link href="/introduction">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/bf/box">
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
