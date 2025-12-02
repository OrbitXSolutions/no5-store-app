import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Package, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    title: "Total Revenue",
    value: "AED 124,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "1,248",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Total Products",
    value: "156",
    change: "+3.1%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Total Users",
    value: "3,842",
    change: "-2.4%",
    trend: "down",
    icon: Users,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Fatima Al-Rashid",
    email: "fatima@email.com",
    product: "Elegant Black Silk Abaya",
    amount: "AED 1,299",
    status: "Completed",
    date: "Dec 2, 2025",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&h=100&fit=crop",
  },
  {
    id: "ORD-002",
    customer: "Aisha Mohammed",
    email: "aisha@email.com",
    product: "Pearl Embellished Abaya",
    amount: "AED 1,599",
    status: "Processing",
    date: "Dec 1, 2025",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop",
  },
  {
    id: "ORD-003",
    customer: "Maryam Hassan",
    email: "maryam@email.com",
    product: "Gold Sequins Evening Abaya",
    amount: "AED 2,199",
    status: "Shipped",
    date: "Nov 30, 2025",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=100&h=100&fit=crop",
  },
  {
    id: "ORD-004",
    customer: "Layla Ibrahim",
    email: "layla@email.com",
    product: "Beige Summer Abaya",
    amount: "AED 899",
    status: "Pending",
    date: "Nov 29, 2025",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop",
  },
]

const topProducts = [
  {
    name: "Elegant Black Silk Abaya",
    sales: 156,
    revenue: "AED 202,644",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&h=100&fit=crop",
  },
  {
    name: "Pearl Embellished Abaya",
    sales: 124,
    revenue: "AED 198,276",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop",
  },
  {
    name: "Gold Sequins Evening",
    sales: 98,
    revenue: "AED 215,502",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=100&h=100&fit=crop",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500">Welcome back! Here is your store overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white border-zinc-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 bg-white border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
            <a href="/admin/orders" className="text-sm text-amber-600 hover:underline">
              View all
            </a>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-zinc-500 border-b border-zinc-200">
                    <th className="pb-3 font-medium">Order</th>
                    <th className="pb-3 font-medium hidden sm:table-cell">Customer</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="text-sm">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-zinc-100">
                            <Image
                              src={order.image || "/placeholder.svg"}
                              alt={order.product}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-zinc-900">{order.id}</p>
                            <p className="text-zinc-500 text-xs truncate max-w-[120px]">{order.product}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 hidden sm:table-cell">
                        <p className="text-zinc-900">{order.customer}</p>
                        <p className="text-zinc-500 text-xs">{order.date}</p>
                      </td>
                      <td className="py-4 font-medium text-zinc-900">{order.amount}</td>
                      <td className="py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Processing"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Shipped"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="bg-white border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Top Products</CardTitle>
            <a href="/admin/products" className="text-sm text-amber-600 hover:underline">
              View all
            </a>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <span className="text-lg font-bold text-zinc-300 w-6">{index + 1}</span>
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-100">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-zinc-900 truncate">{product.name}</p>
                    <p className="text-sm text-zinc-500">{product.sales} sales</p>
                  </div>
                  <p className="text-sm font-medium text-zinc-900">{product.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
