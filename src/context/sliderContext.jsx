import {createContext, useContext, useState} from "react";

export const SliderContext = createContext();

export const SliderProvider = ({children}) => {
  const [slide, setSlide] = useState(false);

  const slideClose = () => {
    setSlide(false);
  };
  const slideOpen = () => {
    setSlide(true);
  };
    return (
        <SliderContext.Provider value={{slide, slideClose, slideOpen}}>
            {children}
        </SliderContext.Provider>
    )
}
export const useSliderContext =() => {
    return useContext(SliderContext);
}