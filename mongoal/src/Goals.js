import React from 'react';

class Goals extends React.Component {

    constructor(props){
        super(props);
        this.state =
            {
                goals: "[{\"id\":\"1\",\"userId\":\"1\",\"title\":\"Workout 3x\",\"date\":\"2019-07-29\",\"outOf\":\"3\",\"curr\":\"1\"}]"
            };
    }

    componentDidMount(){
        fetch("http://patrickmalara.com/mongoal/getTable.php")
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({goals: result});
            }
        )
    }

    render(){
		return(
			<div class="container">
				<h1>Goals</h1>
                <h3>June 2020</h3>
                <br />
                <br />
                <p>{this.state.goals}</p>
                <TableView goalsJSON={this.state.goals}/>

			</div>
		);
	}
}



class TableView extends React.Component {
    render(props){
        return(
            <table class="table table-hover">
                <tr>
                    <th>Goal</th>
                    <th>Completion</th>
                    <th></th>
                </tr> 
                { 
                    this.props.goalsJSON.map((goal) => {
                        return (
                            <tr key={goal.id}>
                                <td>{goal.title}</td>
                                <td> {goal.curr} / {goal.outOf}</td>
                                <td>  <button type="button" class="btn btn-primary">+</button> </td>
                            </tr>
                        );
                    })
                
                }
                
            </table> 
        );
    }
}




export default Goals;
