import Image from "next/image";

interface Cat {
  name: string,
  imgCat: string
}

function ItemCard({ name, imgCat }: Cat) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <Image
          src={imgCat}
          alt={name}
          width={200}
          height={200}
          layout="responsive" // Menentukan layout responsif agar gambar tidak terdistorsi
        />
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
  );
}

export default ItemCard;
