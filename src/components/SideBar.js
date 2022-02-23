import './SideBar.scss'

import { NavLink } from 'react-router-dom'
import { MdCompareArrows, MdHelpCenter } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsCurrencyExchange } from 'react-icons/bs'
import { BsPiggyBank } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { useRef } from 'react'

const helpCenterUrl = 'https://help.ambire.com/hc/en-us/categories/4404980091538-Ambire-Wallet'

const SideBar = ({ match, portfolio, hidePrivateValue }) => {
  const sidebarRef = useRef()

  return (
    <div id="sidebar" ref={sidebarRef}>
      <div className="balance">
        <label>Balance</label>
      </div>
      <nav>
        <NavLink to={match.url + "/deposit"} activeClassName="selected">
          <div className="item">
              <GiReceiveMoney/>Deposit
          </div>
        </NavLink>
        <NavLink to={match.url + "/transfer"} activeClassName="selected">
          <div className="item">
              <BiTransfer/>Transfer
          </div>
        </NavLink>
        <NavLink to={match.url + "/swap"} activeClassName="selected">
          <div className="item">
              <BsCurrencyExchange/>Swap
          </div>
        </NavLink>
        <NavLink to={match.url + "/earn"} activeClassName="selected">
          <div className="item">
              <BsPiggyBank/>Earn
          </div>
        </NavLink>
        <NavLink to={match.url + "/transactions"} activeClassName="selected">
          <div className="item">
              <MdCompareArrows/>Transactions
          </div>
        </NavLink>
        <div className="separator"></div>
        <a href={helpCenterUrl} target="_blank" rel="noreferrer">
          <div className="item" id="help-center">
            <MdHelpCenter/>Help Center
          </div>
        </a>
      </nav>
    </div>
  )
}

export default SideBar
