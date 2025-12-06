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
        <main className="flex-1 px-6 py-8">
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
                  ว
                </p>
              </section>

              <section id="getting-started">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  การเริ่มใช้งาน
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  หากต้องการเริ่มใช้งาน Kivex Store คุณต้องทำตามขั้นตอนดังต่อไปนี้:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>สร้างบัญชีผู้ใช้โดยคลิกปุ่ม "สมัครสมาชิก"</li>
                  <li>ยืนยันอีเมลของคุณเพื่อเปิดใช้งานบัญชี</li>
                  <li>เข้าสู่ระบบด้วยชื่อผู้ใช้และรหัสผ่าน</li>
                  <li>ตั้งค่าโปรไฟล์และที่อยู่จัดส่ง</li>
                  <li>เริ่มช้อปปิ้งสินค้าที่คุณสนใจ</li>
                </ol>
              </section>

              <section id="shopping-methods">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  วิธีการช้อปปิ้ง
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  การช้อปปิ้งใน Kivex Store นั้นทำได้ง่ายดาย
                  คุณสามารถค้นหาสินค้าได้หลายวิธีดังนี้:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>ใช้แถบค้นหาที่ด้านบนของหน้าเว็บ</li>
                  <li>เรียกดูหมวดหมู่สินค้าต่างๆ ในเมนูหลัก</li>
                  <li>ดูสินค้าแนะนำและโปรโมชั่นพิเศษ</li>
                  <li>กรองสินค้าตามราคา, ยี่ห้อ, หรือขนาด</li>
                </ul>
              </section>

              <section id="payment-shipping">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  การชำระเงินและจัดส่ง
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  เราดำเนินการตามขั้นตอนการจ่ายเงินและจัดส่งอย่างไรต่อเมื่อได้รับคำสั่งซื้อ:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      วิธีการชำระเงิน
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• บัตรเครดิต/เดบิต (Visa, MasterCard)</li>
                      <li>• กระเป๋าอิเล็กทรอนิกส์ (True Money, PromptPay)</li>
                      <li>• บัญชีธนาคาร</li>
                      <li>• เงินสด (COD = จ่ายเงินสดตอนรับสินค้า)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      การจัดส่ง
                    </h3>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• รถส่งสินค้าในเขตเมือง (1-2 วัน)</li>
                      <li>• ไปรษณีย์ภายในประเทศ (2-5 วัน)</li>
                      <li>• บริการนำส่งด่วน (EMS)</li>
                      <li>• ติดตามพัสดุแบบเรียลไทม์</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="payment-methods">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  วิธีการชำระเงิน
                </h2>
                <div className="flex justify-center">
                  <img
                    src="https://img2.pic.in.th/pic/kv-payment.png"
                    alt="วิธีการชำระเงิน"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </section>

              <section id="return-policy">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  นโยบายการคืนสินค้า
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  เรารับประกันความพึงพอใจของลูกค้า
                  หากสินค้าที่ได้รับมีปัญหา คุณสามารถส่งคืนหรือเปลี่ยนสินค้าได้ภายใน 30 วัน
                  ติดต่อทีมบริการลูกค้าของเราเพื่อขอความช่วยเหลือ
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  ติดต่อเรา
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  หากคุณมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อเราได้หลายช่องทาง:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-gray-900 dark:text-white">อีเมล</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">support@kivexstore.com</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-gray-900 dark:text-white">โทรศัพท์</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">02-XXX-XXXX</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-gray-900 dark:text-white">แชทสด</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">แชทในเว็บไซต์</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HomeIcon className="h-4 w-4" />
                      <span className="text-gray-900 dark:text-white">เฟซบุ๊ก</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Kivex Store</p>
                  </div>
                </div>
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
