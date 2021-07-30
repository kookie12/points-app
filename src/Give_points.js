import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

function Give_points () {
	
	return (
		<div>
			<h1> this is give points </h1>
			
			<Link component={RouterLink} to="/Soldier">
				<Button variant="contained" color="primary" disableElevation>
				   홈  화면으로 돌아가기!!
				</Button>						
			</Link>

		</div>
		
	
	);
	
}

export default Give_points;



