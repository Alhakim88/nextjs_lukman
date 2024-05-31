import { Button } from "@/components/ui/button";
import ItemCard from "@/components/ui/item-card";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <main className="container mt-5 bg-slate-400 p-5">
    <Navbar />
    <div className="flex-container">
    <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
    <ItemCard name="Aegean" imgCat={`${linkImage}/ozEvzdVM-.jpg`} />
    <ItemCard name="American Bobtail" imgCat={`${linkImage}/hBXicehMA.jpg`} />
    <ItemCard name="American Curl" imgCat={`${linkImage}/xnsqonbjW.jpg`} />
    <ItemCard name="American Shorthair" imgCat={`${linkImage}/JFPROfGtQ.jpg`} />
    <ItemCard name="American Wirehair" imgCat={`${linkImage}/8D--jCd21.jpg`} />
    <ItemCard name="Arabian Mau" imgCat={`${linkImage}/k71ULYfRr.jpg`} />
    <ItemCard name="Australian Mist" imgCat={`${linkImage}/_6x-3TiCA.jpg`} />
    <ItemCard name="Balinese" imgCat={`${linkImage}/13MkvUreZ.jpg`} />
    <ItemCard name="Bambino" imgCat={`${linkImage}/5AdhMjeEu.jpg`} />
    <ItemCard name="Birman" imgCat={`${linkImage}/HOrX5gwLS.jpg`} />
    <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
    <ItemCard name="British Longhair" imgCat={`${linkImage}/7isAO4Cav.jpg`} />
    <ItemCard name="British Shorthair" imgCat={`${linkImage}/s4wQfYoEk.jpg`} />
    <ItemCard name="Burmese" imgCat={`${linkImage}/4lXnnfxac.jpg`} />
    <ItemCard name="Burmilla" imgCat={`${linkImage}/jvg3XfEdC.jpg`} />
    <ItemCard name="California Spangled" imgCat={`${linkImage}/B1ERTmgph.jpg`} />
    <ItemCard name="Chetooh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
    <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
    <ItemCard name="Dragon Li" imgCat={`${linkImage}/BQMSld0A0.jpg`} />
    <ItemCard name="Egyptian Mau" imgCat={`${linkImage}/TuSyTkt2n.jpg`} />
    <ItemCard name="Exotic Shorthair" imgCat={`${linkImage}/YnPrYEmfe.jpg`} />
    <ItemCard name="Havana Brown" imgCat={`${linkImage}/njK25knLH.jpg`} />
    <ItemCard name="Himalayan" imgCat={`${linkImage}/CDhOtM-Ig.jpg`} />
    <ItemCard name="Japanese Bobtail" imgCat={`${linkImage}/-tm9-znzl.jpg`} />
    <ItemCard name="Javanese" imgCat={`${linkImage}/xoI_EpOKe.jpg`} />
    <ItemCard name="Khao Manee" imgCat={`${linkImage}/165ok6ESN.jpg`} />
    <ItemCard name="Kurilian" imgCat={`${linkImage}/NZpO4pU56M.jpg`} />
    <ItemCard name="LaPerm" imgCat={`${linkImage}/aKbsEYjSl.jpg`} />
    <ItemCard name="Maine Coon" imgCat={`${linkImage}/OOD3VXAQn.jpg`} />
    <ItemCard name="Manx" imgCat={`${linkImage}/fhYh2PDcC.jpg`} />
    <ItemCard name="Munchkin" imgCat={`${linkImage}/j5cVSqLer.jpg`} />
    <ItemCard name="Nebelung" imgCat={`${linkImage}/OGTWqNNOt.jpg`} />
    <ItemCard name="Norwegian Forest Cat" imgCat={`${linkImage}/06dgGmEOV.jpg`} />
    <ItemCard name="Ocicat" imgCat={`${linkImage}/JAx-08Y0n.jpg`} />
    <ItemCard name="Oriental" imgCat={`${linkImage}/LutjkZJpH.jpg`} />
    <ItemCard name="Persian" imgCat={`${linkImage}/-Zfz5z2jK.jpg`} />
    <ItemCard name="Pixie-bob" imgCat={`${linkImage}/z7fJRNeN6.jpg`} />
    <ItemCard name="Ragamuffin" imgCat={`${linkImage}/SMuZx-bFM.jpg`} />
    <ItemCard name="Ragdoll" imgCat={`${linkImage}/oGefY4YoG.jpg`} />
    <ItemCard name="Russian Blue" imgCat={`${linkImage}/Rhj-JsTLP.jpg`} />
    <ItemCard name="Savannah" imgCat={`${linkImage}/a8nIYvs6S.jpg`} />
    <ItemCard name="Scottish Fold" imgCat={`${linkImage}/o9t0LDcsa.jpg`} />
    <ItemCard name="Selkirk Rex" imgCat={`${linkImage}/II9dOZmrw.jpg`} />
    <ItemCard name="Siamese" imgCat={`${linkImage}/ai6Jps4sx.jpg`} />
    <ItemCard name="Singapura" imgCat={`${linkImage}/Qtncp2nRe.jpg`} />
    <ItemCard name="Snowshoe" imgCat={`${linkImage}/MK-sYESvO.jpg`} />
    <ItemCard name="Somali" imgCat={`${linkImage}/EPF2ejNS0.jpg`} />
    <ItemCard name="Sphynx" imgCat={`${linkImage}/KBroiVNCM.jpg`} />
    <ItemCard name="Toyger" imgCat={`${linkImage}/O3F3_S1XN.jpg`} />

    </div>
    <section>

    </section>

    <footer/>

      <Button className="bg-green-500 px-8">Click Me</Button>

    </main>
  );
}
