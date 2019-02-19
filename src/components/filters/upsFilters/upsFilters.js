import React from "react"
import { StaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import './upsFilters.scss'
import UpsFilter from "./upsFilter"

class UpsFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ""
    }
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
            query {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/filters/ups/" } },
                sort: { fields: [frontmatter___id], order: ASC }
              ) {
                edges {
                  node {
                    html
                    headings {
                      depth
                      value
                    }
                    frontmatter {
                      name
                      label
                      value
                      type
                      id
                      selected
                    }
                  }
                }
              }
            } 
          `
        }
        render={ 
          data => {
            this.props.getAllUpsFilters( get(data, "allMarkdownRemark.edges") )
            return (
              <>
                <div className="ups-filter">
                  <div className="searchBox">
                    <label>Search</label>
                    <ul>
                        <li><input type="text" name="searchUps" onChange={this.onChange.bind(this)}/></li>
                        <li><button className="button" onClick={ () => this.props.triggerSearch(this.state.searchText) }>Search</button></li>
                    </ul>
                  </div>
                </div>
                {
                  get(data, "allMarkdownRemark.edges").map( (filter, index) => <UpsFilter key={index} filter={filter} onChange={this.props.onChange} /> )
                }
              </>
            )
          } 
        }
      />
    )
  }
  onChange(e) {
    this.setState({
      searchText: e.currentTarget.value
    })
  }
}

export default UpsFilters