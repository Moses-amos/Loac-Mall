import React from 'react'
import { Empty } from 'antd';

function EmptyListing() {
  return (
    <div style={{
        width: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
        }}>
        <br />
        <Empty description={false} />
        <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
        }}>
        <p>No Items listed yet</p>
        </div>
        </div>
  )
}

export default EmptyListing