import { useState } from "react";

const Home = () => {
    const amounts = [2000, 500, 100, 20, 5, 1];


    const  [currencies, setCurrencies] = useState([0, 0, 0, 0, 0, 0]);
    var returnAmt; 

    const [err, setErr] = useState(null);
    const [err2, setErr2] = useState(null);
    const [bill, setBill] = useState();
    const [given, setGiven] = useState();
    const [visibility, setVisibility] = useState();
    const [result, setResult] = useState();


    const handleChange = (e)=> {
        let input = parseInt(e.target.value);
        setBill(input);
        result && setResult(null);
    }

    const handleChange2 = (e)=> {
        let input = parseInt(e.target.value);
        setGiven(input);
        result && setResult(null);
        setCurrencies([0, 0, 0, 0, 0, 0]);
    }

    const handleClick = ()=> {

        if (bill > 0) {
            setVisibility(true);
            setErr(null);
        } else {
            setErr(true);
            setVisibility(false);

        }
    }

    const handleEvaluation = ()=> {
        if (given >= bill) {
            returnAmt = given - bill;
            
            for(let i = 0; i < amounts.length; i++){
                
                if (returnAmt >= amounts[i]){
                   currencies[i] = Math.floor(returnAmt / amounts[i]);
                   returnAmt = returnAmt % amounts[i];
                }
            }
            setCurrencies(currencies);
            setResult(true);
            setErr2(null)        
        }else {
            setErr2(true);
        }
        
    }

    return ( 
        <div className="home">
            <h2>Cash Register Manager</h2>
            <p className="instruc">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
            <h3>Bill Amount:</h3>
            <input type="number" onChange={(e)=> {handleChange(e)}}/>
            {err && <p className="err">please enter a valid amount</p>}
            <button onClick={handleClick}>Next</button>

            { visibility && 
            <>
            <h3>Given cash:</h3>
            <input type="number" onChange={(e)=> {handleChange2(e)}}/>
            {err2 && <p className="err">enter a valid amount which is greater than bill</p>}
            <button onClick={handleEvaluation}>evaluate</button>
            </> }

            { result &&
           <table style={{width: "100%"}}>
             <tbody>

                <tr>
                    <td>No. of Notes</td>
                    <td>{ currencies[0] }</td>
                    <td>{ currencies[1] }</td>
                    <td>{ currencies[2] }</td>
                    <td>{ currencies[3] }</td>
                    <td>{ currencies[4] }</td>
                    <td>{ currencies[5] }</td>
               </tr>

               <tr>
                    <td>Note</td>
                    <td>2000</td>
                    <td>500</td>
                    <td>100</td>
                    <td>20</td>
                    <td>5</td>
                    <td>1</td>
               </tr>
               </tbody>
           </table>
           }

        </div>
     );

}
export default Home;


