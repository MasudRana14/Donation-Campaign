

const Banner = () => {

    return (
        <div>

            <div className="relative">

                <div className="bg-white opacity-20">
                    <img src="https://i.ibb.co/yYJ9HLj/Rectangle-4281.png" alt="" className="w-full" />
                </div>

                <div className="absolute top-[30px] left-[15px] lg:top-[200px] md:left-[200px] lg:left-[650px] xl:left-[360px] text-center">
                    <h2 className="text-sm md:text-3xl lg:text-4xl font-bold md:mb-8 lg:mb-8 ">I Grow By Helping People In Need</h2>
                    <input className=" lg:w-72 md:w-72 md:h-12 lg:h-12 rounded-md border-solid border-2 border-indigo-600 bg-zinc-100 lg:px-4 md:px-4 focus:outline-none " type="search" name="" id="" />
                    <button className="btn lg:w-20 md:w-20 md:h-8 lg:h-8 w-16 btn-primary">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;