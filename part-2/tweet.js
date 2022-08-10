

const Tweet = (Props)=>{
    const username = Props.username
    const name = Props.name
    const date = Props.date
    const message = Props.message
    return(
        <div>
            <ul>
                <li> username: <b>{username}</b></li>
                <li> name:  {name}</li>
                <li> date: {date}</li>
                <li> message: {message}</li>
            </ul>
        </div>
    )
}