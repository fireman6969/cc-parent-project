
import { _decorator, Component, Node, utils } from 'cc';
import { LogUtility } from '../ccLogProj/logProject/assets/Script/LogUtility';
const { ccclass, property } = _decorator;

 
@ccclass('functionScript')
export class functionScript extends Component {
   
    
    public read() : void {
        LogUtility.log("read");
    }

    public write() : void {
        LogUtility.logWarning("write");
    }
}


