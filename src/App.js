import React, {useEffect, useState} from 'react';
import * as stateAbbr from "datasets-us-states-abbr";
import Chart from "./Chart/Chart";

/*import logo from './logo.svg';
import './App.css';*/

function App() {
    // eslint-disable-next-line no-unused-vars
    const [activeQuery, setActiveQuery] = useState("NY");
    // eslint-disable-next-line no-unused-vars
    const [stateData, setStateData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://covidtracking.com/api/states?state=${activeQuery}`);
            const data = await res.json();
            setStateData(data);
        };
        getData().then();
    }, [activeQuery]);
    return (
        <div className="App">
            <div style={{width: "600px", textAlign: "center"}}>
                <h1>COVID-19 Test Tracker</h1>
                <form>
                    <label>
                        Select a state:
                        <select value={activeQuery} onChange={e => setActiveQuery(e.target.value)}>
                            {Object.values(stateAbbr).map(abbr => {
                                return (
                                    <option value={abbr} key={abbr}>{abbr}</option>
                                )
                            })}
                        </select>
                    </label>
                </form>
                <Chart data={stateData} />
            </div>
        </div>
    );
}

export default App;
