import axios from "axios";
import {useEffect, useState } from "react"
import { useLocation} from "react-router-dom";

type info  = {

}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const His_Result = () => {
  const [tasks, setTasks] = useState<info[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
  let query = useQuery();
  let date1 = query.get("start")
  let date2 = query.get("end")

  
  
  

  const fetchApi = async () => {
    var date : string[] = []
		try {
			const resp =
				await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${date1}&end=${date2}`)
        setLoading(false)
        for (const [key,value] of Object.entries(resp.data.bpi)) {
          var arr : string, price : number
          price = Number(value)
          arr = key + " - " + price.toLocaleString()
          date.push(arr)
        }  
        setTasks(date)


 
		}
		catch (err) {
			setLoading(false)
			setError(true)
		}
	}
  

  useEffect(() => {
		fetchApi()
	}, [])

  
  
  const render = () => {
		if (loading)
			return (
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-2xl'>Loading ...</p>
        </div>
            )
		else if (error)
			return(
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        </div>
      )
		else
			return (
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-xl font-semibold'> ( From {date1} To {date2})</p>
          <ul>
          {tasks.map(x => <li className='text-xl'> {x} THB</li>)}
          </ul>
       </div>
                    
			)
	 }

    return(
        
       <div>
         {render()}
       </div>

    )
}

export default His_Result 