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
            ><i class="fa fa-book text-muted mr-2" aria-hidden="true"></i>{repo.name}</a>
          </h4>
          <div className="row float-right mr-1">
            <i className="fa fa-code-fork" aria-hidden="true"> {repo.forks}</i>
            <i className="fa fa-eye ml-3" aria-hidden="true"> {repo.watchers}</i>
          </div>
          <p className="m-2">{repo.description}</p>
          <p className="m-2"><strong>Language: </strong>{repo.language}</p>
        </div>
      </div>
    ))}
  </React.Fragment>
)
