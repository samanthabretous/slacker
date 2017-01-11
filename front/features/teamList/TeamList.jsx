import React from 'react';
import store from '../../store/store'

const TeamList = props => {
  const {teams} = props
  return (
    <div>
      {teams && teams.map((team,index) =>{
        return <p className="team_img square" key={index}>{team.name[0] + team.name[1]}</p>
      }
      )}
    </div>
  )
}

export default TeamList;