import { useParams } from "react-router-dom";

const Detail = () =>{
    
    const {id} = useParams();
    return(
        <div>
            <h1>Detail</h1>
            <div>이곳은 디테일 페이지 입니다.</div>
        </div>
    )
}
export default Detail;