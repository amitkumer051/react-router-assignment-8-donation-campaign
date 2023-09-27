/* eslint-disable react/prop-types */
import { useState } from "react";
import Cards from "../Cards/Cards";

const Banner = ({cards}) => {
    const [search ,setSearch]= useState('');
    const handleSearch = e =>{
        e.preventDefault();
       setSearch(e.target.name.value);
        
    }
    return (
        <><div className="bg-white bg-opacity-50 container ">
            <img className="h-[440px] w-full  opacity-20 absolute container" src="https://i.ibb.co/sv35XDc/donation-picture.jpg" />
            <div className="relative container flex items-center justify-center h-[440px] flex-col">
                <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">I Grow By Helping People In Need</h2> <br />
                <div>
                    <form onSubmit={handleSearch}>
                        <input className="p-2 rounded-l-md text-sm" type="text" name="name" placeholder="Search here...." />
                        <button className="bg-[#FF444A] p-2 rounded-r-md text-white text-sm font-medium">Search</button>
                    </form>
                </div>
            </div>
        </div>
        
        <Cards cards={cards} search={search}></Cards>
        </>
    );
};
export default Banner;
