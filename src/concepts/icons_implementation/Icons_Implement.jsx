import { SiSpacex } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import DOG from "../../assets/dog.jpg"
const Icons_Implement =()=>{
    return(
        <div>
            <h1>
                <SiSpacex size={200}  color="purple"/>
            </h1>
            <h1><RiInstagramLine  size={200} color="hotpink" /></h1>
            <h1>
                <img src={DOG} alt="" width={1000 } height={800} />
            </h1>
        </div>
    )
}
export default Icons_Implement