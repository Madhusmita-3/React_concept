const Card=({user:{username="user",age="18"}})=>{
    return(
        <div>
            <h1>{username}</h1>
            <h1>{age}</h1>
            <hr />

        </div>
    )
}
export default Card