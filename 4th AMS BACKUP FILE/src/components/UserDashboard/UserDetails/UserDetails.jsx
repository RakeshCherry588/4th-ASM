import React from 'react'
import './UserDetails.css'
import Timer from '../Timer/Timer'

function UserDetails() {
  return (
    <>
    <div className='grid-container-1'>
      <div className="timer-1"><Timer/></div>
        <div className="onTime-1  sizeClass-1">
          <div className="empImgNum-1">
          <span className='totalNum-1'>Casual leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)' }}></span>
          <span  className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span  className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span  className="totalUsedRem">Remaining : 5</span>
        </div>
          </div>
        </div>

        <div className="onTime-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Sick leaves</span>
          <span className='blank-img' ></span>
          </div>
          
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Total : 10</span>
          </div> 
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="absent-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Earned leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Totla : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="lateArrival-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Unpaid leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="earlyDepartures-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Half day leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}> </span> 
          <span className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>
        <div className="leaveRequest">
          <button className='btn btn-primary'>Request for Leave</button>
        </div>

        {/* <div className=" Request">
        <button className='Request-btn '>Request for leave</button>
        </div> */}
    </div>
    </>
  )
}

export default UserDetails