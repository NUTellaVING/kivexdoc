"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calculator } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"

export default function FeeCalculator() {
  const [netAmount, setNetAmount] = useState("")
  const [result, setResult] = useState<{ transferAmount: number; fee: number } | null>(null)
  const [error, setError] = useState("")

  const FEE_PERCENTAGE = 0.029 // 2.9%
  const NET_PERCENTAGE = 1 - FEE_PERCENTAGE // 0.971 หรือ 97.1%

  const calculateTransfer = () => {
    const net = parseFloat(netAmount)

    if (isNaN(net) || net <= 0) {
      setError("กรุณาป้อนยอดเงินสุทธิที่ถูกต้อง")
      setResult(null)
      return
    }

    const transferAmount = net / NET_PERCENTAGE
    const fee = transferAmount * FEE_PERCENTAGE

    setResult({ transferAmount, fee })
    setError("")
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8 font-noto-sans-thai">
          <SidebarTrigger />
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-sm text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200">&larr; กลับหน้าแรก</Link>
            </div>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-8 w-8 text-black dark:text-white" />
                <h1 className="text-4xl font-bold text-black dark:text-white">
                  คำนวนค่าธรรมเนียม
                </h1>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <p className="text-black dark:text-white mb-6">
                  คำนวณยอดโอนเพื่อให้ได้เงินสุทธิ <span className="font-semibold text-black dark:text-white">2.9%</span>
                </p>
                <p className="text-sm text-black dark:text-white mb-8">
                  ค่าธรรมเนียม: <strong>2.9%</strong> (จากยอดโอนทั้งหมด)
                </p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="netAmount" className="block text-sm font-medium text-black dark:text-white mb-2">
                      ยอดเงินสุทธิที่ต้องการให้ผู้รับได้ (บาท):
                    </label>
                    <Input
                      id="netAmount"
                      type="number"
                      placeholder="เช่น 100"
                      step="0.01"
                      value={netAmount}
                      onChange={(e) => setNetAmount(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <Button
                    onClick={calculateTransfer}
                    className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-semibold"
                  >
                    คำนวณ
                  </Button>

                  {(error || result) && (
                    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
                      {error ? (
                        <p className="text-black dark:text-white">{error}</p>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-black dark:text-white">
                            ยอดเงินที่ <strong>ต้องโอนทั้งหมด</strong>:{" "}
                            <span className="text-black dark:text-white font-bold text-lg">
                              {result?.transferAmount.toFixed(2)}
                            </span>{" "}
                            บาท
                          </p>
                          <hr className="border-gray-300 dark:border-gray-600" />
                          <p className="text-black dark:text-white">
                            ค่าธรรมเนียม (2.9%):{" "}
                            <strong className="text-black dark:text-white">
                              {result?.fee.toFixed(2)}
                            </strong>{" "}
                            บาท
                          </p>
                          <p className="text-black dark:text-white">
                            ยอดเงินสุทธิที่ผู้รับจะได้รับ:{" "}
                            <strong className="text-black dark:text-white">
                              {parseFloat(netAmount).toFixed(2)}
                            </strong>{" "}
                            บาท
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <div className="flex justify-between mt-12">
              <Button asChild variant="outline">
                <Link href="/payment-methods">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
              <Button asChild>
                <Link href="/shipping">
                  ถัดไป
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}