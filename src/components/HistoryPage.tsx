import {useHistory} from 'react-router-dom'

const HistoryPage = () => {
    var x : string, y : string, linkHis : string
    var a : string[], b : string[]
    let history = useHistory();


    const tran = (event : string) => {
        x = event 
    }

    const tran2 = (event : string) => {
        y = event 
    }

    const ClickCallBack = () => {
        linkHis = "/history/result?start=" + x + "&end=" + y
        if(x === undefined || y === undefined){
            alert("Please select start or end")
        }else{
            a = x.split("-")
            b = y.split("-")

            if(parseInt(a[0]) < parseInt(b[0])){
                history.push(linkHis)      
            }else if(parseInt(a[0]) === parseInt(b[0])){
                if(parseInt(a[1]) < parseInt(b[1])){
                    history.push(linkHis) 
                }else if(parseInt(a[1]) === parseInt(b[1])){
                    if(parseInt(a[2]) < parseInt(b[2])){
                        history.push(linkHis)   
                    }else if(parseInt(a[2]) === parseInt(b[2])){
                        history.push(linkHis) 
                    }else if(parseInt(a[2]) > parseInt(b[2])){
                        alert("Please select one more time")
                    }
                }else if(parseInt(a[1]) > parseInt(b[1])){
                    alert("Please select one more time")
                }

            }else if(parseInt(a[0]) > parseInt(b[0])){
                alert("Please select one more time")
            }
            
        }
        
        
    }
    return(
        <div>
            <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => tran(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => tran2(e.target.value)}></input>
            <br />
            <button onClick = {ClickCallBack}>Get data</button>
            </div>

        </div>
        


    )
}

export default HistoryPage