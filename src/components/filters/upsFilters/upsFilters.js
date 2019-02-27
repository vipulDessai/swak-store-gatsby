import React from "react"
import { StaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import './upsFilters.scss'
import UpsFilter from "./upsFilter"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UpsFilters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.resetOnce = false
    this.readPhaseSelected = true
  }
  componentDidUpdate () {
    this.resetOnce = false
  }
  render () {
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
            let allFilters = get(data, "allMarkdownRemark.edges")
            if(this.props.phaseSelected && this.readPhaseSelected) {
              allFilters[0].node.frontmatter.selected = parseInt(this.props.phaseSelected)
              this.readPhaseSelected = false
            }
            this.props.getAllUpsFilters( allFilters )
            return (
              <>
                <div className="ups-filter">
                  <div className="filters-buttons">
                    <button className="filter-reset" onClick={ () => this.resetChildFilters() }><FontAwesomeIcon icon="undo"/></button>
                    <button className="filter-closer-button" onClick={ () => this.props.closeFilters() }><FontAwesomeIcon icon="window-close"/></button>
                  </div>
                </div>
                {
                  allFilters.map( (filter, index) => {
                    if(this.resetOnce)
                      filter.node.frontmatter.selected = -1
                    return <UpsFilter key={index} filter={filter} onChange={this.props.onChange} />
                  })
                }
              </>
            )
          } 
        }
      />
    )
  }
  resetChildFilters () {
    this.props.resetFilters()
    this.resetOnce = true
    this.setState()
  }
}

export default UpsFilters