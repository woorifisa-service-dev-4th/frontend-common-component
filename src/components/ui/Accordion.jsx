import { Children } from "react"
import React from "react"


const Accordion = ({children}) => {
    return (
        <>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[770px] gap-[30px]">
                <div
                    className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[88px] overflow-hidden rounded-lg bg-white border border-[#d3d3d3]"
                    style={{ boxShadow: "0px 20px 50px 0 rgba(0,0,0,0.12)" }}
                >
                    <div className="flex justify-between items-center self-stretch flex-grow relative p-[30px]">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            {children}
                        </p>
                    </div>
                </div>
            </div>
        </>
    ) 
}
export default Accordion;