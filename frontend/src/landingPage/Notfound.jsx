import Lottie from "lottie-react";
import Lonely from "../animation/lonely404.json"

function Notfound() {
    return (
        <section className="bg-[#202123] px-12 lg:px-24 xl:px-32 py-30">
            <div className="grid grid-cols-1 text-center">
            <Lottie animationData={Lonely} loop={true} className='p-2 md:p-4 lg:p-8 xl:p-10'></Lottie>
            <p className="text-[#999] text-6xl">Page Not Found <a href="/" className="text-xl text-[var(--primary)]">Visit home &larr;</a></p>
            </div>
        </section>
    );
}

export default Notfound;