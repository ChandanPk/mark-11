import { useState } from "react";

const Home = ()=> {
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [error2, setError2] = useState(null);

    const [bill, setBill] = useState();
    const [given, setGiven] = useState();
 
  const [change, setChange] = useState({
    twoK : '',
    fiveHun : '',
    hundred : '',
    twenty : '',
    ten : '',
    five : '',
    one : '',
  })

    


    const handleChange = (e)=> {
        let value = parseInt(e.target.value)
        setBill(value);
        setError(null);
    }

    const handleClick = ()=> {
        bill ? setVisibility(true) : setError(true); 
    }

    const handleChange2 = (e)=> {
        let value = parseInt(e.target.value)
        setGiven(value);
    } 

    const handleEvaluation = ()=> {
        if (given > bill) {
            var returnAmt = given - bill;

            if (returnAmt >= 2000){
                for (let i = 1; returnAmt >= 2000; i++){
                    returnAmt = returnAmt - 2000;
                    setChange(change.twoK = i);
                }
            } 

            if (returnAmt >= 500){
                for (let i = 1; returnAmt >= 500; i++){
                    returnAmt = returnAmt - 500;
                    setChange(change.twoK = i);
                }
            } 

            if (returnAmt >= 100){
                for (let i = 1; returnAmt >= 2000; i++){
                    returnAmt = returnAmt - 100;
                    setChange(change.fiveHun = i);
                }
            } 

            if (returnAmt >= 20){
                for (let i = 1; returnAmt >= 20; i++){
                    returnAmt = returnAmt - 20;
                    setChange(change.hundred = i);
                }
            } 

            if (returnAmt >= 10){
                for (let i = 1; returnAmt >= 10; i++){
                    returnAmt = returnAmt - 10;
                    setChange(change.twenty = i);
                }
            } 
             
            if (returnAmt >= 5){
                for (let i = 1; returnAmt >= 5; i++){
                    returnAmt = returnAmt - 5;
                    setChange(change.ten = i);
                }
            } 

            if (returnAmt >= 1){
                for (let i = 1; returnAmt >= 1; i++){
                    returnAmt = returnAmt - 1;
                    setChange(change.one = i);
                }
            } 

            console.log(change.twoK    );
            console.log(change.fiveHun );
            console.log(change.hundred );
            console.log(change.twenty  );
            console.log(change.ten     );
            console.log(change.five    );
            console.log(change.one     );

            setResult(true);
            setError2(null);

        } else {
            setError2(true);
        }
    }

    return(
        <div className="home">
            <h2>Cash Register Manager</h2>
            <p id="instruc">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
        
            <h3>Bill amount:</h3>
            <input type="Number" onChange={(e)=> handleChange(e)}/>
            {error && <p className="err">please enter a valid bill amount ?</p>}
            <button onClick={handleClick}>submit</button>

            <div id="space"></div>

           { visibility &&
            <>
            <h3>Given cash:</h3>
            <input onChange={(e)=> handleChange2(e)} type="Number"/>
            { error2 && <p className="err">Cash is less than bill, please enter right amount</p>}
            <button onClick={handleEvaluation}>evaluate</button>

            </>
           }

           { result &&
           <table style={{width: "100%"}}>
             <tbody>

                <tr>
                    <td>No. of Notes</td>
                    <td>{ change.twoK }</td>
                    <td>{ change.fiveHun }</td>
                    <td>{ change.hundred }</td>
                    <td>{ change.twenty }</td>
                    <td>{ change.ten }</td>
                    <td>{ change.five }</td>
                    <td>{ change.one }</td>
               </tr>

               <tr>
                    <td>Note</td>
                    <td>2000</td>
                    <td>500</td>
                    <td>100</td>
                    <td>20</td>
                    <td>10</td>
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