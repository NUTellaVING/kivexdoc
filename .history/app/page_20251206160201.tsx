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

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              นโยบายการคืนสินค้า
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              เรารับประกันความพึงพอใจของลูกค้า
              หากสินค้าที่ได้รับมีปัญหา คุณสามารถส่งคืนหรือเปลี่ยนสินค้าได้ภายใน 30 วัน
              ติดต่อทีมบริการลูกค้าของเราเพื่อขอความช่วยเหลือ
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ติดต่อเรา
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              หากคุณมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อเราได้หลายช่องทาง:
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>📧 อีเมล: support@kivexstore.com</li>
              <li>📞 โทรศัพท์: 02-XXX-XXXX</li>
              <li>💬 แชทสด: แชทในเว็บไซต์</li>
              <li>📱 เฟซบุ๊ก: Kivex Store</li>
            </ul>
          </section>
        </main>

        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 Kivex Store. สงวนลิขสิทธิ์ทุกประการ.</p>
        </footer>
      </div>
    </div>
  );
}
