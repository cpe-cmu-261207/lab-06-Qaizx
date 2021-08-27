import { useEffect, useState } from "react"
import axios from "axios"



type TaskType = {
    time : {updated : string, updatedISO : string, updateduk : string}
    disclaimer : string
    bpi : {USD : {code : string, rate : string, description : string, rate_float : Float32Array}, THB : {code : string, rate : string, description : string, rate_float : Float32Array}}

}


const CurrentPage = () => {
	const [task, setTask] = useState<TaskType | null>(null);
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

    useEffect(() => {
		//fetch with promise
		axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
			.then(resp => {
				setTask(resp.data)
				setLoading(false)
                
			})
			.catch(err => {
				setLoading(false)
				setError(true)
			})

	}, [])

    
    const render = () => {
		if (loading)
			return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p>There was some error !</p>
                </div>
            )
		else if (error)
			return(
				<div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p className='text-2xl'>Loading ...</p>
                </div>
			) 
		else
			return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p className='text-2xl'>{task?.bpi.THB.rate_float.toLocaleString()} THB</p>
                <p> (Last updated {task?.time.updated}) </p>
                </div>
                    
			)
	}


    return(
        <div>
            {render()}
        </div>
        
    )
}

export default CurrentPage