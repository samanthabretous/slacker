import React from 'react';
// import {Link} from 'react-router';
import store from '../../store/store';
import {getChannel} from './channelActions';


const Channel = (props)=> {

  const enterChat=(channelname)=>{
    props.router.replace(`/${props.params.team}/${channelname}`)
    getChannel(props.params.team,channelname)
  }

  return (
    <section className="channel_list">
      <ul>
      {props.channels?
        props.channels.map((a,idx)=>
        <li onClick={()=>enterChat(a.name)} key={idx}>{a.name}</li>):
        "Loading..."}
      </ul>
    </section>
  );
}
          // onClick={this.enterChat.bind(this, a.username)}
  


export default Channel;