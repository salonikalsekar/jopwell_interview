import React from 'react';
import { github_search } from '../github_api/search';
import Functionality from '../components/Functionality';

class Results extends React.Component {
  constructor() {
    super()

    this.state = {
                    repositories: [],
                    err: ''
                  }
  }

  componentDidMount() {
    this.retrieveData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.inText)
      this.retrieveData();
    }


//Get data using Github api
  retrieveData() {
    const { data, starData, license, inc_forked, undoForm } = this.props
    github_search(data, starData, license, inc_forked)
      .then(data => this.setState({
        repositories: data,
        err: ''
      }))
      .catch(err => this.setState({
        err: 'Oops! Please try again.'
      }))
    undoForm()
  }

  displayResults() {
    const { repositories } = this.state
    return (
      <ul>
        {repositories.items.map(r =>
          <li key={r.id}>
            <Functionality item={r} />
          </li>)}
      </ul>
    )
  }

  render() {
    const { repositories, err } = this.state

    if (repositories.total_count === 0)
      return <h4>
        No repositories to display
        </h4>
    if (repositories.length === 0)
      return <h4>
        Searching results...
      </h4>
    return (
      <div className="results_wrapper">
        <h3>SEARCH results</h3>
        {this.displayResults()}
      </div>
    )
  }
}


export default Results;
