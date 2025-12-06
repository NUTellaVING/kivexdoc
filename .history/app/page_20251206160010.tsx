export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Kivex Store ข้อมูลและวิธีการใช้งาน
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400">
            คู่มือการใช้งานสำหรับผู้ใช้อ้างอย่างครบถ้วน
          </p>
        </header>

        <main className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              บทนำ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ยินดีต้อนรับเข้าสู่คู่มือการใช้งาน Kivex Store
              แพลตฟอร์มที่ให้บริการการซื้อขายสินค้าออนไลน์อย่างครบครัน
              ในส่วนนี้เราจะแนะนำคุณเกี่ยวกับฟีเจอร์หลักและวิธีการเริ่มต้นใช้งาน
            </p>
          </section>

          <section>
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

          <section>
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

          <section>
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
