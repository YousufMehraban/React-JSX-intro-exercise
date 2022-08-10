
const Person = (Props)=>{
    const name = Props.name
    const age = Props.age
    const hobbies = Props.hobbies
    // let msg;
    // if (age >= 18){
    //     msg = <h3>Please go vote!</h3>
    // } else if (age < 18){
    //     msg = <h3> You must be 18!</h3>
    // }

    return(
        <div>
            <p> Learn some information about this person! </p>
            <ul>
                <li> Name: {name.slice(0, 6)}</li>
                <li> Age: {age} </li>
                <ul>
                    Hobbies
                    {hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
            <h3> { age >= 18 ? 'Please go vote!' : 'You must be 18!' }</h3>
        </div>
    )
}