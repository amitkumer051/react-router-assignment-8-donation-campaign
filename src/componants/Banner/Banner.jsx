
const Banner = () => {
    return (
        <div className="bg-white bg-opacity-50 container ">
            <img className="h-[440px] w-full  opacity-20 absolute container" src="https://i.ibb.co/sv35XDc/donation-picture.jpg" />
            <div className="relative container flex items-center justify-center h-[440px] flex-col">
                <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">I Grow By Helping People In Need</h2> <br />
                <div>
                    <input className="p-2 rounded-l-md text-sm" type="text" placeholder="Search here...." />
                    <button className="bg-[#FF444A] p-2 rounded-r-md text-white text-sm font-medium">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;