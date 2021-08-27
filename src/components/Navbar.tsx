import {Link, Switch, Route } from 'react-router-dom'
import About from './About'
import CurrentPage from './CurrentPage'
import HistoryPage from './HistoryPage'
import His_Result from './His_Result'

const Navbar = () => {
	return (
		<div className='my-5'>
			<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
			<div className='flex justify-center text-md space-x-5'>
				<Link to ='/current'>Current price</Link> 
				<p>|</p>
				<Link to ='/history/select'>Historical price</Link>	
				<p>|</p>
				<Link to ='/about'>About me</Link>	
			</div>

			<Switch>
				<Route path = '/about' exact>
					<br/>
					<About/>
				</Route>

				<Route path = '/current' exact>
					<br/>
					<CurrentPage/>
				</Route>

				<Route path = '/history/select' exact>
					<br/>
					<HistoryPage/>
				</Route>

				<Route path = '/history/result' >
					<br/>
					<His_Result/>
				</Route>

				<Route path = '' exact>
					<br/>
					<CurrentPage/>
				</Route>

			</Switch>
		</div>
	)
}

export default Navbar