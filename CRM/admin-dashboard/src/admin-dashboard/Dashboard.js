import React from 'react';
import $ from 'jquery'; 

const Dashboard = () => {
  /* global Chart:false */

$(function () {


  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  var $salesChart = $('#sales-chart')
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
        },
        {
          backgroundColor: '#ced4da',
          borderColor: '#ced4da',
          data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }

              return '$' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $visitorsChart = $('#visitors-chart')
  // eslint-disable-next-line no-unused-vars
  var visitorsChart = new Chart($visitorsChart, {
    data: {
      labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
      datasets: [{
        type: 'line',
        data: [100, 120, 170, 167, 180, 177, 160],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [60, 80, 70, 67, 80, 77, 100],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })
})
    return(  
      <><div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard v3</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="!#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>
        </div>
      <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Online Store Visitors</h3>
                      <a href="!#">View Report</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">820</span>
                        <span>Visitors Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 12.5%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="position-relative mb-4">
                      <canvas id="visitors-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This Week
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last Week
                      </span>
                    </div>
                  </div>
                </div>
                {/* /.card */}
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Products</h3>
                    <div className="card-tools">
                      <a href="!#" className="btn btn-tool btn-sm">
                        <i className="fas fa-download" />
                      </a>
                      <a href="!#" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Sales</th>
                          <th>More</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Some Product
                          </td>
                          <td>$13 USD</td>
                          <td>
                            <small className="text-success mr-1">
                              <i className="fas fa-arrow-up" />
                              12%
                            </small>
                            12,000 Sold
                          </td>
                          <td>
                            <a href="!#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Another Product
                          </td>
                          <td>$29 USD</td>
                          <td>
                            <small className="text-warning mr-1">
                              <i className="fas fa-arrow-down" />
                              0.5%
                            </small>
                            123,234 Sold
                          </td>
                          <td>
                            <a href="!#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Amazing Product
                          </td>
                          <td>$1,230 USD</td>
                          <td>
                            <small className="text-danger mr-1">
                              <i className="fas fa-arrow-down" />
                              3%
                            </small>
                            198 Sold
                          </td>
                          <td>
                            <a href="!#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Perfect Item
                            <span className="badge bg-danger">NEW</span>
                          </td>
                          <td>$199 USD</td>
                          <td>
                            <small className="text-success mr-1">
                              <i className="fas fa-arrow-up" />
                              63%
                            </small>
                            87 Sold
                          </td>
                          <td>
                            <a href="!#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col-md-6 */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                      <a href="!#">View Report</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="position-relative mb-4">
                      <canvas id="sales-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This year
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last year
                      </span>
                    </div>
                  </div>
                </div>
                {/* /.card */}
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Online Store Overview</h3>
                    <div className="card-tools">
                      <a href="!#" className="btn btn-sm btn-tool">
                        <i className="fas fa-download" />
                      </a>
                      <a href="!#" className="btn btn-sm btn-tool">
                        <i className="fas fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-success text-xl">
                        <i className="ion ion-ios-refresh-empty" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-success" /> 12%
                        </span>
                        <span className="text-muted">CONVERSION RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-warning text-xl">
                        <i className="ion ion-ios-cart-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-warning" /> 0.8%
                        </span>
                        <span className="text-muted">SALES RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <p className="text-danger text-xl">
                        <i className="ion ion-ios-people-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-down text-danger" /> 1%
                        </span>
                        <span className="text-muted">REGISTRATION RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                  </div>
                </div>
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        </div>
      </>
    );
}

export default Dashboard;