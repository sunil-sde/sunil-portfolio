
import React, {useContext} from 'react'
import appContext from "./appContext";


function useAppState() {
    const {state, dispatch} = useContext(appContext);
  return {state, dispatch};
}

export default useAppState
