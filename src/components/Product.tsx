import Image from "next/image";

interface ProductProps {
  pName: string;
  pDesc: string;
  pPrice: number;
  pImage: string;
  bgColor?: string;
}

export default function Product({
  pName,
  pDesc,
  pPrice,
  pImage,
  bgColor = 'bg-white' // Default color if not passed
}: ProductProps) {

  return (
    <div className={`w-[300px] h-[350px] rounded-xl flex flex-col shadow-xl outline outline-1 outline-gray-200 ${bgColor}
    hover:scale-105 hover:shadow-2xl`}>
      <Image
        className="rounded-t-xl"
        src={pImage}
        alt="Product Image"
        width={300}
        height={200}
        priority
      />

      <div className="mt-9 pl-4 space-y-2">
        <h1 className="font-bold">{pName}</h1>
        <h2 className="font-bold">${pPrice}</h2>
        <p className="text-gray-600 text-sm">{pDesc}</p>
      </div>

    </div>
  );
}