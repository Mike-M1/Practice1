import Navbar from "@/app/Common_Components/Navbar/Navbar"

const Trainers = () => {
    return (
        <div>
            <Navbar/>
            
            <div className="h-screen w-screen text-white bg-black flex flex-col items-center p-[20px]">
                
                <h1>The Team</h1>
                
                <div id="Trainer_Container" className="flex flex-grow w-full bg-white text-black items-center flex-col justify-around">

                    <div id="Trainer_Card" className="border-black border-2 h-fit ">

                        {/* <Image src={} width={} height={}/> */}

                        <h1>Trainer 1</h1>
                        <h1>Expertise</h1>
                        <h1>This will be a section for reviews/testimonials/ratings</h1>
                    </div>

                    <div id="Trainer_Card" className="border-black border-2 h-fit ">

                        {/* <Image src={} width={} height={}/> */}

                        <h1>Trainer 1</h1>
                        <h1>Expertise</h1>
                        <h1>This will be a section for reviews/testimonials/ratings</h1>
                    </div>

                    <div id="Trainer_Card" className="border-black border-2 h-fit ">

                        {/* <Image src={} width={} height={}/> */}

                        <h1>Trainer 1</h1>
                        <h1>Expertise</h1>
                        <h1>This will be a section for reviews/testimonials/ratings</h1>
                    </div>

                    <div id="Trainer_Card" className="border-black border-2 h-fit ">

                        {/* <Image src={} width={} height={}/> */}

                        <h1>Trainer 1</h1>
                        <h1>Expertise</h1>
                        <h1>This will be a section for reviews/testimonials/ratings</h1>
                    </div>

                    <div id="Trainer_Card" className="border-black border-2 h-fit ">

                        {/* <Image src={} width={} height={}/> */}

                        <h1>Trainer 1</h1>
                        <h1>Expertise</h1>
                        <h1>This will be a section for reviews/testimonials/ratings</h1>
                    </div>


                </div>

            </div>

            


            
        </div>
    )
}

export default Trainers