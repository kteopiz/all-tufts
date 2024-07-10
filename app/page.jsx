import TuftCard from "@/components/tuft-card/TuftCard.jsx"
import Dylan from "@/components/dylan-tries/Dylan"

export default function Home() {

    return (
        <>
           <section className="p-4 w-full flex justify-center items-center">
            <div className="flex justify-center items-center w-full gap-16">
                <TuftCard imageUrl={"/AkatsukiCloud.png"} tuftName={"Akatsuki Cloud"} />
                <TuftCard imageUrl={"/GojoTuft.png"} tuftName={"Gojo"} />
                <TuftCard imageUrl={"/StitchTuft.png"} tuftName={"Stitch"} />
            </div>
           </section>
           <section className="p-4 w-full flex justify-center items-center">
            <div className="flex justify-center items-center w-full gap-16">
                <Dylan image={"/egg.png"} doodoo={"Egg!"} title={"Raymond"}/>
                <Dylan image={"/longanisa.jpeg"} doodoo={"Loganisa!"} title={"Dylan"}/>
                <Dylan image={"/egg.png"} doodoo={"Egg!"} title={"Jarrel"}/>
                
                
            </div>
           </section>
        </>
    )
}