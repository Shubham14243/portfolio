import React from 'react'
import { useMenuContext } from '../Context/MenuContext';

const useGetData = () => {

    const { setMenuItem } = useMenuContext();
  
    const setData = (menuName) => {
        setMenuItem(menuName);
    }

    return {setData};

}

export default useGetData;