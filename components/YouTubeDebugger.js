import React from 'react'

class YoutubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleBitrate = this.handleBitrate.bind(this)
    this.handleResolution = this.handleResolution.bind(this)
  }
//you have to seperate this out into two different functions. one for the bitrate and one for the resolution, this is why you are getting the node error
  handleBitrate(){
    this.setState({
        settings: Object.assign({}, this.state.settings,
          {
          bitrate: 12
        }),
      })
    }

    handleResolution(){
      this.setState({
        settings: Object.assign({}, this.state.settings,
        {video: Object.assign({}, this.state.settings.video,
          {resolution: '720p'})
        })
      })
    }

  render(){
    return(
      <div>
      <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
      </div>
    )
  }
}


module.exports = YoutubeDebugger
