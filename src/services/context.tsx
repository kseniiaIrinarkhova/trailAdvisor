import { createContext, useContext, useState } from "react";
import { Park } from "../vite-env.d";

interface IParkContext {
    park: Park | null;
    setPark: React.Dispatch<React.SetStateAction<Park| null>>
}

interface IProps {
    children: React.ReactNode;
}

const ParkContext = createContext<IParkContext>({ park: null, setPark: ()=> {} });

const ParkProvider: React.FC<IProps> = ({ children }:IProps) => {
    const [park, setPark] = useState<Park | null>(null);

    return (
        <ParkContext.Provider value={{ park, setPark }}>
            {children}
        </ParkContext.Provider>
    );
};

const getParkContext=()=>{
    const {park} = useContext(ParkContext);
if(park === null) throw new Error("Some error with getting park info")
return park
}

export{ParkContext, ParkProvider, getParkContext}