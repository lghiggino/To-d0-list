import "../styles/Home.css"
import List from "../components/List"

const Home = (props) => {
    const data = null
    // const data = props.data
    // console.log("props from Home component props:", props)
    // console.log("props from Home component data:", data)
    // return (
    //     <section className="section">
    //         <h2>To do List</h2>
    //         <List data={data} />
    //     </section>
    // )
    return(
        <section className="section">
            {!data ? <h2>Please login to see your to do list</h2> : <h2>Map data here {data}</h2>}
        </section>
    )
}

export default Home