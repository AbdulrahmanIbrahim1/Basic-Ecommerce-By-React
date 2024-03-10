import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css'
import { getSidebarStatus, setSidebarOff } from '../../store/sidebarSlice';
import { Link } from 'react-router-dom';
import { fetchAsyncCategories, getAllCategories } from '../../store/categorySlice';
import { useEffect } from 'react';

function Sidebar() {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])
  const isSidebarOn = useSelector(getSidebarStatus)
  // const isSidebarOn = false
  console.log("isSidebarOn is : ", isSidebarOn);
  const hide = false

  const hideAside = () => {
    document.getElementsByClassName('.my-aside').className.add("hide-aside")
  }
  return (
    <>
      {/* <aside className={isSidebarOn ? 'sidebar' : 'sidebar hide-sidebar'}>
        <div className="offcanvas offcanvas-start show "  >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" >All Gategories</h5>
            <button type="button" className="btn-close" onClick={() => dispatch(setSidebarOff())}></button>
          </div>
          <div className="offcanvas-body">
            <ul className='list-group list-group-flush'>
              {
                categories.map((cat, id) => {
                  return (
                    <li className='list-group-item text-capitalize  ' key={id}>
                      <Link to={`category/${cat}`} className='cat-lis-link text-decoration-none balck-text'>{cat.replace("-", " ")}</Link>
                    </li>
                  )

                })
              }
            </ul>
          </div>
        </div>

      </aside> */}

      <aside className={isSidebarOn ? "my-aside " : 'my-aside hide-aside'}>
        <div className='lay' onClick={() => {
          dispatch(setSidebarOff())
        }}></div>
        <div className='aside-cont '>
          <div className='to-head d-flex justify-content-between'>
            <h3>All Gategories </h3>
            <button onClick={() => {
              dispatch(setSidebarOff())
            }}>❌</button>
          </div>
          <ul className='list-group list-group-flush'>
            {
              categories.map((cat, id) => {
                return (
                  <li className='list-group-item text-capitalize  ' key={id}>
                    <Link to={`category/${cat}`} className='cat-lis-link text-decoration-none balck-text'>{cat.replace("-", " ")}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;