
const App = ()=>{
    return (
        <div>
            <Tweet username="SmartGirl" name="Killer" date={new Date().toDateString()} message="I like traveling!" />
            <Tweet username="UglyMan" name="Johny" date={new Date().toDateString()} message="Eating burger is my passion!" />
            <Tweet username="LadySmall" name="Cutie" date={new Date().toDateString()} message="Let's go hiking!" />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
