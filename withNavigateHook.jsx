import React from "react";
import { useLocation, useNavigate, useParams} from "react-router-dom";

//const withNavigateHook = (Component) => (props) => {
const withNavigateHook = (Component) =>  (props) =>{
    const location = useLocation();
    const params = useParams();
    const navigation = useNavigate();
    console.log("with NAVIGATE id = "+ params.id);
//    return <Component navigation={navigation} location={location} {...props} params={params} />   
    return <Component navigation={navigation} location={location} {...props} params={params} />   
}
export default withNavigateHook;