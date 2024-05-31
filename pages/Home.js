import ItemCard from "@/components/ui/item-card";
import Navbar from "@/components/ui/navbar";


export default function Home() {
    const linkImage = "https://cdn2.thecatapi.com/images";

    // Data kucing yang berisi nama dan URL gambar
    const catData = [
        { name: "Abyssinian", img: "0XYvRd7oD.jpg" },
        { name: "Aegean", img: "ozEvzdVM-.jpg" },
        { name: "American Bobtail", img: "hBXicehMA.jpg" },
        { name: "American Curl", img: "xnsqonbjW.jpg" },
        { name: "American Shorthair", img: "JFPROfGtQ.jpg" },
        { name: "American Wirehair", img: "8D--jCd21.jpg" },
        { name: "Arabian Mau", img: "k71ULYfRr.jpg" },
        { name: "Australian Mist", img: "_6x-3TiCA.jpg" },
        { name: "Balinese", img: "13MkvUreZ.jpg" },
        { name: "Bambino", img: "5AdhMjeEu.jpg" },
        { name: "Birman", img: "HOrX5gwLS.jpg" },
        { name: "Bombay", img: "5iYq9NmT1.jpg" },
        { name: "British Longhair", img: "7isAO4Cav.jpg" },
        { name: "British Shorthair", img: "s4wQfYoEk.jpg" },
        { name: "Burmese", img: "4lXnnfxac.jpg" },
        { name: "Burmilla", img: "jvg3XfEdC.jpg" },
        { name: "California Spangled", img: "B1ERTmgph.jpg" },
        { name: "Chetooh", img: "IFXsxmXLm.jpg" },
        { name: "Donskoy", img: "3KG57GfMW.jpg" },
        { name: "Dragon Li", img: "BQMSld0A0.jpg"},
        { name: "Egyptian Mau", img: "TuSyTkt2n.jpg"},
        { name: "Exotic Shorthair", img: "YnPrYEmfe.jpg"},
        { name: "Havana Brown", img: "njK25knLH.jpg"},
        { name: "Himalayan", img: "CDhOtM-Ig.jpg"},
        { name: "Japanese Bobtail", img: "-tm9-znzl.jpg"},
        { name: "Javanese", img: "xoI_EpOKe.jpg"},
        { name: "Khao Manee", img: "165ok6ESN.jpg"},
        { name: "Kurilian", img: "NZpO4pU56M.jpg"},
        { name: "LaPerm", img: "aKbsEYjSl.jpg"},
        { name: "Maine Coon", img: "OOD3VXAQn.jpg"},
        { name: "Manx", img: "fhYh2PDcC.jpg"},
        { name: "Munchkin", img: "j5cVSqLer.jpg"},
        { name: "Nebelung", img: "OGTWqNNOt.jpg"},
        { name: "Norwegian Forest Cat", img: "06dgGmEOV.jpg"},
        { name: "Ocicat", img: "JAx-08Y0n.jpg"},
        { name: "Oriental", img: "LutjkZJpH.jpg"},
        { name: "Persian", img: "-Zfz5z2jK.jpg"},
        { name: "Pixie-bob", img: "z7fJRNeN6.jpg"},
        { name: "Ragamuffin", img: "SMuZx-bFM.jpg"},
        { name: "Ragdoll", img: "oGefY4YoG.jpg"},
        { name: "Russian Blue", img: "Rhj-JsTLP.jpg"},
        { name: "Savannah", img: "a8nIYvs6S.jpg"},
        { name: "Scottish Fold", img: "o9t0LDcsa.jpg"},
        { name: "Selkirk Rex", img: "II9dOZmrw.jpg"},
        { name: "Siamese", img: "ai6Jps4sx.jpg"},
        { name: "Singapura", img: "Qtncp2nRe.jpg"},
        { name: "Snowshoe", img: "MK-sYESvO.jpg"},
        { name: "Somali", img: "EPF2ejNS0.jpg"},
        { name: "Sphynx", img: "KBroiVNCM.jpg"},
        { name: "Toyger", img: "O3F3_S1XN.jpg"},
    ];

    return (
        <main className="container mt-5 bg-slate-400 p-5">
            <Navbar />
            <div className="flex-container">
                {catData.map((cat, index) => (
                    <ItemCard key={index} name={cat.name} imgCat={`${linkImage}/${cat.img}`} />
                ))}
            </div>
        </main>
    );
}
