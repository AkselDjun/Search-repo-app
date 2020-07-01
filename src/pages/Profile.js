import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user

  console.log(user)

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">Go home</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                className="rounded"
                style={{ width: '200px' }}
              />
              <h1>{name}</h1>
              {location && <p><strong><i class="fa fa-map-marker" aria-hidden="true"></i> Location: </strong> {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>Biography</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark m-1"
              >Open profile</a>
              <ul className="m-3 list-unstyled">
                {login && <li>
                  <strong><i class="fa fa-user-o" aria-hidden="true"></i> Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong><i class="fa fa-building-o" aria-hidden="true"></i> Company: </strong> {company}
                </li>}

                {blog && <li>
                  <strong><i class="fa fa-globe" aria-hidden="true"></i> Website: </strong> {blog}
                </li>}
              </ul>

              <div className="mt-3">
                <div className="badge badge-primary m-1">Followers: {followers}</div>
                <div className="badge badge-success m-1">Following: {following}</div>
                <div className="badge badge-info m-1">Perository: {public_repos}</div>
                <div className="badge badge-secondary m-1">Gists: {public_gists}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ "backgroundColor": "#007bff", "height": "1px" }} />

      <div className="mt-4">
        <Repos repos={repos} />
      </div>
    </Fragment>
  )
}
