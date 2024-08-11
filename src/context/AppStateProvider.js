import appContext from "./appContext";
import appReducer from './appReducer';

const AppState = (props) => {

  const [state, dispatch] = appReducer();

  return (
    <appContext.Provider value={{state, dispatch}}>
      {props.children}
    </appContext.Provider>
  )
}

export default AppState;