function App(props) {
    return (
        <div>
            <Home homeName='Oila' />
            <List list={['Bag', 'Book', 'Pen']} />
        </div>
    )
}

function Home(props) {
    return (
        <div>
            {props.homeName}
        </div>
    )
}
function List(props) {
    return (
        <div>
            <ul>
                {props.list.map((val, index) => 
                {
                    return <li key={val + index}>{val}</li>
                }
                )}

            </ul>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'))