import React from 'react'
import { ChannelContext, UserContext } from '../App'

export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
                {
                    return (
                        <ChannelContext.Consumer>
                        {
                            channel => {
                                <div>
                                    User COntext value {user},channel context value {channel}
                                </div>
                            }

                        }
                    </ChannelContext.Consumer>

                    )
                    
                    
                }
                
            }
        }
      </UserContext.Consumer>
    </div>
  )
}
