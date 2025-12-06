"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, AlertTriangle, Video, Shield, XCircle } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function ReturnPolicy() {
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
                นโยบายการคืนสินค้า
              </h1>

              <div className="space-y-6">
                {/* No Refund Policy */}
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                        นโยบายการคืนเงิน
                      </h3>
                      <p className="text-red-800 dark:text-red-200">
                        <strong>ไม่รับคืนเงินทุกกรณี</strong> - หลังจากได้รับบัญชีแล้ว ไม่สามารถขอคืนเงินได้
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Requirement */}
                <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Video className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">
                        ความสำคัญของวิดีโอหลักฐาน
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200 mb-3">
                        คุณ <strong>ต้อง</strong> บันทึกวิดีโอทั้งหมดตั้งแต่ได้รับข้อมูลบัญชีจากเราจนถึงการเข้าสู่ระบบสำเร็จ
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>• แสดงวันที่และเวลาจริง</p>
                        <p>• ไม่มีการตัดต่วนหรือแก้ไข</p>
                        <p>• เห็นชัดเจนทุกขั้นตอน</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Replacement Policy */}
                <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        นโยบายการเปลี่ยนบัญชี
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200 mb-3">
                        หากบัญชีมีปัญหาและคุณมีวิดีโอหลักฐานที่สมบูรณ์ เราจะ:
                      </p>
                      <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span><strong>ให้บัญชีใหม่</strong> แทนบัญชีที่มีปัญหา</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>ตรวจสอบวิดีโอเพื่อยืนยันปัญหา</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>ดำเนินการภายใน 24-48 ชั่วโมง</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        ข้อควรจำ
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• <strong>ไม่มีวิดีโอ = ไม่รับผิดชอบ</strong> หากบัญชีมีปัญหา</li>
                        <li>• บันทึกวิดีโอ <strong>ทันที</strong> ตั้งแต่แรกรับข้อมูลบัญชี</li>
                        <li>• เก็บวิดีโอไว้เป็นหลักฐานตลอดเวลา</li>
                        <li>• หากบัญชีใช้ได้ปกติ ถือว่าการซื้อสำเร็จ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/shipping">
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
