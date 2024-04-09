import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiHomeOfficeLine } from 'react-icons/ri'

const TopPanel = () => {
  return (
    <div style={{ width: '-webkit-fill-available' }}>
      <table>
        <tr>
          <td>
            {' '}
            <RiHomeOfficeLine size={30} />
          </td>

          <td>
            <p
              style={{ fontSize: '22px', color: 'grey', marginLeft: '1rem'}}
            >
              Welcome to African Journals Dashboard
            </p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default TopPanel
