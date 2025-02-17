import Product from "@/components/Product";

export default function ProductPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-16">
        <Product pName={"Producto 1"} pDesc={"Un artículo de alta calidad y duradero"} pPrice={79} pImage={"/products/product1.jpg"} />
        <Product pName={"Producto 2"} pDesc={"Ideal para el uso diario con gran rendimiento"} pPrice={120} pImage={"/products/product2.png"} />
        <Product pName={"Producto 3"} pDesc={"Diseño elegante y materiales premium"} pPrice={95} pImage={"/products/product3.jpg"} />

        <Product pName={"Producto 4"} pDesc={"Compacto, eficiente y fácil de usar"} pPrice={60} pImage={"/products/product2.png"} />
        <Product pName={"Producto 5"} pDesc={"Perfecto para quienes buscan innovación"} pPrice={150} pImage={"/products/product3.jpg"} />
        <Product pName={"Producto 6"} pDesc={"Un clásico con un toque moderno"} pPrice={110} pImage={"/products/product1.jpg"} />
      </div>
    </main>
  );
}