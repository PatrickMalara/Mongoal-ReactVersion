import React from 'react';

class Goals extends React.Component {

    constructor(props){
        super(props);
        this.state =
            {
                goals: ""
            };
    }

    componentDidMount(){
        //We are using a proxy here because of cors
        fetch("https://cors-anywhere.herokuapp.com/http://patrickmalara.com/mongoal/getTable.php?userId=" + sessionStorage.getItem('userId'))
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                goals: result
            });
            },
            (error) => {
            this.setState({
                goals: "error making AJAX request"
            });
            }
        )
    }

    render(){
		return(
			<div className="container">
				<h1>Goals for {sessionStorage.getItem('userId')}</h1>
                <h3>June 2020</h3>
                <br />
                <br />
                <p>{console.log(this.state.goals)}</p>
                <TableView goalsJSON={this.state.goals}/>

			</div>
		);
	}
}


//This renders the whole list of goals
//  there is a props called goalsJSON
//  if goalsJSON is empty than we just render a loading message
//  otherwise we render the whole list of goals using the GoalView Component
class TableView extends React.Component {
    render(props){
        if(this.props.goalsJSON !== ""){
            return(
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>Goal</th>
                            <th>Completion</th>
                            <th></th>
                        </tr> 
                        { 
                            this.props.goalsJSON.map((goal) => {
                                return (
                                    <GoalView 
                                        goalId={goal.id}
                                        goalTitle={goal.title}
                                        goalOutOf={goal.outOf}
                                    />
                                );
                            })
                        
                        }
                    </tbody>
                </table> 
            );
        }
        else {
            return (
                <div>Loading Goals...</div>
            );
        }
        
    }
}


class GoalView extends React.Component {
    render(props){
        return(
            <tr key={this.props.goalId}>
                <td>{this.props.goalTitle}</td>
                <td> {this.props.goalOutOf}</td>
                <td>  <button type="button" className="btn btn-primary">+</button> </td>
            </tr>
        )
    }
}

export default Goals;
