import React from 'react'


export const Repos = ({ repos }) => (
  <React.Fragment>
    {repos.map(repo => (
      <div className="card mb-3" key={repo.id} >
        <div className="card-body">
          <h4>
            <a
              href={repo.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >{repo.name}</a>
          </h4>
          <div className="row">
            <i className="fa fa-code-fork col-md-0 ml-md-auto" aria-hidden="true">  {repo.forks}</i>
            <i className="fa fa-eye ml-4 col-auto" aria-hidden="true">  {repo.watchers}</i>
          </div>

          <p className="m-1"><strong>Language: </strong>{repo.language}</p>
        </div>
      </div >
    ))}
  </React.Fragment >
)
