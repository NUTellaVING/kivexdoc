"use client"

import * as React from "react"
import { Search, FileText, Zap, ShoppingCart, CreditCard, RotateCcw, Mail, Phone, MessageSquare, Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  {
    title: "หน้าแรก",
    url: "#home",
    icon: Home,
  },
  {
    title: "บทนำ",
    url: "#introduction",
    icon: FileText,
  },
  {
    title: "การเริ่มใช้งาน",
    url: "#getting-started",
    icon: Zap,
  },
  {
    title: "วิธีการช้อปปิ้ง",
    url: "#shopping-methods",
    icon: ShoppingCart,
  },
  {
    title: "การชำระเงินและจัดส่ง",
    url: "#payment-shipping",
    icon: CreditCard,
  },
  {
    title: "นโยบายการคืนสินค้า",
    url: "#return-policy",
    icon: RotateCcw,
  },
  {
    title: "ติดต่อเรา",
    url: "#contact",
    icon: Phone,
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <h2 className="text-lg font-semibold">Kivex Store</h2>
              <ThemeToggle />
            </div>
            <div className="px-2 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="ค้นหา..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 px-6 py-8">
          <SidebarTrigger className="mb-4" />
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
                  ยินดีต้อนรับเข้าสู่คู่มือการใช้งาน Kivex Store
                  แพลตฟอร์มที่ให้บริการการซื้อขายสินค้าออนไลน์อย่างครบครัน
                  ในส่วนนี้เราจะแนะนำคุณเกี่ยวกับฟีเจอร์หลักและวิธีการเริ่มต้นใช้งาน
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
