import { Leftnav } from "./Leftnav";
import { Right } from "./Right";


export function ContentBox({children})
{
    return (<div className="container-home">
       <div className="side-bar"> <Leftnav/></div>
        {children}
        <div className="user-list-container">
        <Right />
        </div>
        </div>)
}