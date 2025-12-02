"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Filter, Grid, List, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Elegant Black Silk Abaya",
    sku: "ABA-001",
    price: "AED 1,299",
    originalPrice: "AED 1,599",
    stock: 45,
    category: "Evening Wear",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop",
    sales: 156,
  },
  {
    id: 2,
    name: "Pearl Embellished Luxury Abaya",
    sku: "ABA-002",
    price: "AED 1,599",
    originalPrice: null,
    stock: 28,
    category: "Luxury",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=400&fit=crop",
    sales: 124,
  },
  {
    id: 3,
    name: "Gold Sequins Evening Abaya",
    sku: "ABA-003",
    price: "AED 2,199",
    originalPrice: "AED 2,499",
    stock: 12,
    category: "Evening Wear",
    status: "Low Stock",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=300&h=400&fit=crop",
    sales: 98,
  },
  {
    id: 4,
    name: "Beige Summer Collection",
    sku: "ABA-004",
    price: "AED 899",
    originalPrice: null,
    stock: 67,
    category: "Casual",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop",
    sales: 203,
  },
  {
    id: 5,
    name: "Black Embroidered Abaya",
    sku: "ABA-005",
    price: "AED 1,799",
    originalPrice: "AED 1,999",
    stock: 0,
    category: "Luxury",
    status: "Out of Stock",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop",
    sales: 87,
  },
  {
    id: 6,
    name: "Navy Blue Modern Abaya",
    sku: "ABA-006",
    price: "AED 1,199",
    originalPrice: null,
    stock: 34,
    category: "Modern",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=400&fit=crop",
    sales: 145,
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Products</h1>
          <p className="text-zinc-500">Manage your product inventory</p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white border-zinc-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <div className="flex border border-zinc-200 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative aspect-[3/4] bg-zinc-100">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="icon" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {product.originalPrice && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                )}
                <span
                  className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
                    product.status === "In Stock"
                      ? "bg-green-500 text-white"
                      : product.status === "Low Stock"
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-zinc-500 mb-1">{product.sku}</p>
                <h3 className="font-semibold text-zinc-900 truncate">{product.name}</h3>
                <p className="text-sm text-zinc-500 mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-zinc-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-zinc-500">{product.stock} in stock</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-white border-zinc-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-zinc-500 border-b border-zinc-200">
                    <th className="p-4 font-medium">Product</th>
                    <th className="p-4 font-medium">SKU</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Price</th>
                    <th className="p-4 font-medium">Stock</th>
                    <th className="p-4 font-medium">Sales</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="text-sm hover:bg-zinc-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-16 rounded overflow-hidden bg-zinc-100">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium text-zinc-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-zinc-600">{product.sku}</td>
                      <td className="p-4 text-zinc-600">{product.category}</td>
                      <td className="p-4">
                        <span className="font-medium text-zinc-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="block text-xs text-zinc-400 line-through">{product.originalPrice}</span>
                        )}
                      </td>
                      <td className="p-4 text-zinc-600">{product.stock}</td>
                      <td className="p-4 text-zinc-600">{product.sales}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            product.status === "In Stock"
                              ? "bg-green-100 text-green-700"
                              : product.status === "Low Stock"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
