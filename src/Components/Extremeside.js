import { Chat, Dehaze, Mail, People, VideoCall } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsHiddden } from "../Reducers/hideOptions";

const Extremeside=()=>{
    const dispatch=useDispatch();
    const currentstate=useSelector((state)=>{return state.hidoptions.hidden})
    return(
        <div className="Extremeside-container">
            <div className="Extremeside-drawer" onClick={()=>{
                dispatch(setIsHiddden(!currentstate));
            }}>
                <Dehaze style={{height:44}}/>
            </div>
            <div className="Extremeside-options">
                <Mail style={{fontSize:17,paddingTop:4,paddingBottom:4,backgroundColor:"#d3e3fd",paddingRight:12,paddingLeft:12,borderRadius:30}}/>
                <span>Mail</span>
            </div>
            <div className="Extremeside-options">
                <Chat style={{fontSize:17,color:"#202124af",paddingTop:4,paddingBottom:4,paddingRight:10,paddingLeft:10,borderRadius:30}}/>
                <span>Chat</span>
            </div>
            <div className="Extremeside-options">
                <People style={{fontSize:17,color:"#202124af",paddingTop:4,paddingBottom:4,paddingRight:10,paddingLeft:10,borderRadius:30}}/>
                <span>Spaces</span>
            </div>
            <div className="Extremeside-options">
                <VideoCall style={{fontSize:17,color:"#202124af",paddingTop:4,paddingBottom:4,paddingRight:10,paddingLeft:10,borderRadius:30}}/>
                <span>Meet</span>
            </div>
        </div>
    );
}

export default Extremeside;