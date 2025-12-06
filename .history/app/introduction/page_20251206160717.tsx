"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function Introduction() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  {
    title: "หน้าแรก",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "บทนำ",
    url: "/introduction",
    icon: FileText,
  },
  {
    title: "การเริ่มใช้งาน",
    url: "/getting-started",
    icon: Zap,
  },
  {
    title: "วิธีการช้อปปิ้ง",
    url: "/shopping-methods",
    icon: ShoppingCart,
  },
  {
    title: "การชำระเงินและจัดส่ง",
    url: "/payment-shipping",
    icon: CreditCard,
  },
  {
    title: "วิธีการชำระเงิน",
    url: "/payment-methods",
    icon: CreditCard,
  },
  {
    title: "นโยบายการคืนสินค้า",
    url: "/return-policy",
    icon: RotateCcw,
  },
  {
    title: "ติดต่อเรา",
    url: "/contact",
    icon: Phone,
  },
]

export default function Introduction() {
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
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">&larr; กลับหน้าแรก</Link>
            </div>

            <section>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                บทนำ
              </h1>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                ยินดีต้อนรับเข้าสู่คู่มือการใช้งาน Kivex Store
                แพลตฟอร์มที่ให้บริการการซื้อขายสินค้าออนไลน์อย่างครบครัน
                ในส่วนนี้เราจะแนะนำคุณเกี่ยวกับฟีเจอร์หลักและวิธีการเริ่มต้นใช้งาน
              </p>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/getting-started">
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
