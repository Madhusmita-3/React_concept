const TernaryRender=()=>{
    let value=true
    let per=40
    let theme= "light"
    return(
        <div>
           {value? <h1>Hello</h1>:<h1>Bye</h1>}

           {(per>70)?<p>A Grade</p>:(per>50 && per<70)? <p>B Grade</p>:(per>30 && per<50)? <p>C grade</p>:<p>Fail</p>}

           <h1 style={theme==="dark"?{backgroundColor:"pink"}:{backgroundColor:"purple",color:"white"}}>Madhusmita</h1>

            <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
            
        </div>
    )

}
export default TernaryRender