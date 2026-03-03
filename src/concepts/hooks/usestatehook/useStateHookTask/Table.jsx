const Table=({user})=>{
    return(
        <div>
            <div className="cardpage">
                {
                    userdata.map((user) => (
                        <Child key={user.id} user={user} />
                    ))
                }
            </div>

        </div>
    )
}
export default Table