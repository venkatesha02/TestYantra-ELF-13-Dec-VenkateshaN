const userName = 'Dulquer'
// JSX Syntex
const greet = <h1>Hello, {userName}</h1>

const list =<ul>
                <li>Deodrant</li>
                <li>Saree</li>
                <li>Shoe</li>
            </ul>

const items = ["Deodrant",'Saree','Shoe']
const list1 =<ul>
                {
                    items.map((item,index)=>{
                    return <li key={item+index}> {item} </li>
                    })
                }
            </ul>

const element = <h1> Hello World </h1>
ReactDOM.render(list1, document.getElementById('react-container'))