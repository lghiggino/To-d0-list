import React, { useState, useEffect } from 'react'
import "../styles/Home.css"
import List from "../components/List"

const Home = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDataFetch()
    }, [data]);

    async function getDataFetch() {
        try {
            const response = await fetch("http://localhost:2121/api")
            const data = await response.json()
            console.log(data)
            setData(data)
            setLoading(false)
            setError(false)
        } catch (err) {
            console.error(err)
        }
    }

    if (loading) return "Loading data...";
    if (error) return "Error fetching data!";

    // const data = props.data
    // console.log("props from Home component props:", props)
    // console.log("props from Home component data:", data)
    // return (
    //     <section className="section">
    //         <h2>To do List</h2>
    //         <List data={data} />
    //     </section>
    // )
    return (
        <section className="section">
            {!data ?
                <div>
                    <h2>Please login to see your to do list</h2>
                </div> :
                <div>
                    <h2>Map data here {data}</h2>
                </div>
            }
        </section>
    )
}

export default Home