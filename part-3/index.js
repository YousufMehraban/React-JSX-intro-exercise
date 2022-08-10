
const App = ()=>{
    return(
        <div>
            <Person name='Lisa' age={21} hobbies={['Soccer', 'Hiking', 'Sking', 'Snow Boarding']}/>
            <Person name='Alexander' age={15} hobbies={['Reading', 'Hiking', 'Painting', 'Shopping']}/>
            <Person name='Jessica' age={33} hobbies={['Running', 'Reading', 'Coding', 'Cooking']}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

