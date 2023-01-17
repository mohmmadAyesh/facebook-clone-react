import { useState,createContext } from "react";
export const AppContext=createContext(null);
export const ContextProvider = (props) => {
	const [isOpenedMess,setIsOpenedMess]=useState(false);
    const [isOpenedColl,setIsOpenedColl]=useState(false);
    const [isOpenedNot,setIsOpenedNot]=useState(false);
	const ContextValues={isOpenedMess,setIsOpenedMess,isOpenedColl,setIsOpenedColl,isOpenedNot,setIsOpenedNot};
	return (
		<AppContext.Provider value={ContextValues}>
			{props.children}
		</AppContext.Provider>
	);
}