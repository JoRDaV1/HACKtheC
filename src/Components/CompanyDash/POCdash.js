import React from 'react'
import './company.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">View Your POCs Here</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="box">
            <h3>Box 1</h3>
            <p>Description of Box 1</p>
            <form>
              <div className="form-group">
                <label htmlFor="bountyInput">Bounty</label>
                <input
                  type="text"
                  className="form-control"
                  id="bountyInput"
                  placeholder="Enter bounty amount"
                />
              </div>
              <Button variant="primary">Approve</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
