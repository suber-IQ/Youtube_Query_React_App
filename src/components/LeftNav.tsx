import React from "react";
import { useContext } from "react"
import { Context } from "../context/contextApi"
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/contants";
import LeftNavMenuItem from "./LeftNavMenuItem";


const LeftNav = () => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory, mobileMenu} = useContext(Context);

  const clickHandler = (name: string, type: string): void => {
      switch(type){
        case "category":
          setSelectedCategory(name);
          break;
        case "home":
          setSelectedCategory(name);
          break;
        case "menu":
          return;
          default:
            break;
      }
  }
  return (
    <div 
     className={`md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-[0]" : ""}`}
    >
      <div className="flex px-5 flex-col">
        {
          categories.map((item) => (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
              text={item.type == "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name,item.type);
                navigate("/");
              }}
              className={`${selectedCategory === item.name ? "bg-white/[0.15]" : " "}`}
              />
              {
                item.divider && <hr className="my-5 border-white/[0.2]" />
              }
            </React.Fragment>
          ))
        }
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by: Suber-IQ          
        </div>
      </div>
    </div>
  )
}

export default LeftNav