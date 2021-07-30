import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem'; //네이게이션에 들어가는 아이템을 의미함
import IconButton from '@material-ui/core/IconButton'; //appbar에 있는 iconbutton을 눌러서 drawr가 열릴 수 있도록!
import MenuIcon from '@material-ui/icons/Menu'; //iconbutton 안에 menuicon이 있음
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './AppShell.css'; 

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto' //왼쪽 정렬!
    }
}

class AppShell extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            toggle: false, //버튼을 누르면 toggle 값이 true로 된다!
			_class: ''
        };
    }
	
	handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})

	render() {
			const { classes, group, name, _class } = this.props;
			
			return (
				<div className="AppShell">
					<div className="bar">
						<AppBar position="static">
							<IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
								<MenuIcon/>
								<p>Home</p>
							</IconButton>
						</AppBar>
						<Drawer open={this.state.toggle}>
							<MenuItem onClick={this.handleDrawerToggle}>
								<Link component={RouterLink} to="/Soldier">
									<div className="notice">
										<p>홈 화면</p>
									</div>	
								</Link>
							</MenuItem>
							<MenuItem onClick={this.handleDrawerToggle}>
								<Link component={RouterLink} to="/Soldier">
									<div className="notice">
										<p>공지사항</p>
									</div>
								</Link>
							</MenuItem>
							<MenuItem onClick={this.handleDrawerToggle}>
								<Link component={RouterLink} to="/Soldier">
									<div className="notice">
										<p>상점 기준</p>
									</div>
								</Link>
							</MenuItem>
							<MenuItem onClick={this.handleDrawerToggle}>
								<Link component={RouterLink} to="/Soldier">
									<div className="notice">
										<p>벌점 기준</p>
									</div>
								</Link>
							</MenuItem>
							{ parseInt(this.props._class) === 0  || parseInt(this.props._class) === 1 ?
								<div>
									<MenuItem onClick={this.handleDrawerToggle}>
										<Link component={RouterLink} to={{
												pathname: "/Give_points",
												state: {
													_class,
													group,
													name	
												}		
										}}>
												
											<div className="notice">
												<p>상점 주기</p>
											</div>
										</Link>
									</MenuItem>
									<MenuItem onClick={this.handleDrawerToggle}>
										<Link component={RouterLink} to={{
												pathname: "/Give_n_points",
												state: {
													_class,
													group,
													name	
												}		
										}}>
											<div className="notice">
												<p>벌점 주기</p>
											</div>
										</Link>
									</MenuItem>
								</div>
								: null
							}	
							
							<MenuItem onClick={this.handleDrawerToggle}>
								<Link component={RouterLink} to="/">
									<div className="notice">
										<p>로그아웃</p>
									</div>	
								</Link>
							</MenuItem>
							
						</Drawer>
					</div>
					
				</div>
			);
	}
}

export default withStyles(styles)(AppShell);