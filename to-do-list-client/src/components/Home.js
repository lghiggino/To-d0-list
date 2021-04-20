import "../styles/Home.css"
import List from "../components/List"

const Home = (props) => {
    
    const data = props.data
    console.log("props from Home component props:", props)
    console.log("props from Home component data:", data)
    return (
        <section className="section">
            <h2>To do List</h2>
            <List data={data} />
        </section>
    )
}

export default Home