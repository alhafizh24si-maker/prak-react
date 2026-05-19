// ==========================================
// 1. IMPORT SEMUA KOMPONEN YANG SUDAH DIBUAT
// ==========================================
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Components() {
  // ==========================================
  // 2. DATA DUMMY UNTUK KOMPONEN TABLE
  // ==========================================
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    // Menggunakan Layout Component (Container) sebagai pembungkus utama
    <Container className="bg-gray-50 min-h-screen">
      
      {/* HEADER HALAMAN PLAYGROUND */}
      <div className="mb-10 border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-800">Components Playground</h1>
        <p className="text-gray-500 mt-1">
          Halaman demonstrasi untuk menguji komponen-komponen modular yang telah di-breakdown.
        </p>
      </div>

      <div className="space-y-12">
        
        {/* ==========================================
            KATEGORI 1: BASIC COMPONENT
           ========================================== */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4">1. Basic Component</h2>
          <Card>
            <div className="space-y-6">
              
              {/* Demo Button */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Button Variasi</h3>
                <div className="flex flex-wrap gap-3">
                  <Button type="primary">Primary</Button>
                  <Button type="secondary">Secondary</Button>
                  <Button type="success">Simpan</Button>
                  <Button type="warning">Warning</Button>
                  <Button type="danger">Hapus</Button>
                </div>
              </div>

              {/* Demo Badge */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Badge Status</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="primary">Baru</Badge>
                  <Badge type="secondary">Mantan</Badge>
                  <Badge type="success">Aktif</Badge>
                  <Badge type="warning">Pending</Badge>
                  <Badge type="danger">Batal</Badge>
                </div>
              </div>

              {/* Demo Avatar */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Avatar Pengguna</h3>
                <div className="flex gap-3">
                  <Avatar name="Budi" />
                  <Avatar name="Siti" />
                  <Avatar name="Andi" />
                </div>
              </div>

            </div>
          </Card>
        </section>

        {/* ==========================================
            KATEGORI 2: DATA DISPLAY COMPONENT (CARD)
           ========================================== */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4">2. Data Display Component (ProductCard)</h2>
          {/* Grid Layout untuk menyusun kartu produk berdampingan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
            />
          </div>
        </section>

        {/* ==========================================
            KATEGORI 3: DATA DISPLAY COMPONENT (TABLE)
           ========================================== */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4">3. Data Display Component (Table)</h2>
          <Card>
            <Table headers={headers}>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border px-4 py-3 text-gray-600">
                    {index + 1}
                  </td>
                  <td className="border px-4 py-3 font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="border px-4 py-3">
                    {/* Kombinasi komponen Table dengan Badge secara modular */}
                    <Badge type={product.category === "Elektronik" ? "primary" : "warning"}>
                      {product.category}
                    </Badge>
                  </td>
                  <td className="border px-4 py-3 font-bold text-blue-600">
                    {product.price}
                  </td>
                  <td className="border px-4 py-3">
                    {/* Kombinasi komponen Table dengan Button secara modular */}
                    <Button type="primary">Detail</Button>
                  </td>
                </tr>
              ))}
            </Table>
          </Card>
        </section>

      </div>

      {/* ==========================================
          KATEGORI 4: SECTION COMPONENT (FOOTER)
         ========================================== */}
      <Footer />
      
    </Container>
  );
}