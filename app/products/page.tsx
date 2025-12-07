"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Hammer, ChevronRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                รายการสินค้า
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                สินค้าทั้งหมดที่จำหน่ายในร้าน Kivex Store
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <ShoppingCart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle>Blox Fruits</CardTitle>
                  </div>
                  <CardDescription>
                    สินค้าเกี่ยวกับเกม Blox Fruits ทุกรายการ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ไก่ตันผลในกล่อง, ไก่ตันเผ่าV4 Tier 10, และอื่นๆ
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Link href="/bf/box">
                        <Button variant="outline" size="sm">
                          ไก่ตันผลในกล่อง
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/bf/v4-t10">
                        <Button variant="outline" size="sm">
                          ไก่ตันเผ่าV4 Tier 10
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/bf/others">
                        <Button variant="outline" size="sm">
                          ไก่ตันอื่นๆ
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Hammer className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>The Forge</CardTitle>
                  </div>
                  <CardDescription>
                    สินค้าจาก The Forge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ไก่ตันทั่วไปและอื่นๆ
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Link href="/forge/general">
                        <Button variant="outline" size="sm">
                          ไก่ตันทั่วไป
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
              <p>&copy; 2025 Kivex Store. สงวนลิขสิทธิ์ทุกประการ.</p>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}