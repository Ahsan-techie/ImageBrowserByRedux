import {combineReducers} from 'redux'
const songReducer=()=>{
    return[
        {
            title:"Bad boys",
            duration:'3:36'
        },
        {
            title:"Yalla",
            duration:'4:32'
        },
        {
            title:"Ruleta",
            duration:'3:23'
        }
    ]
}

const selectedSongReducer =(selectedSong=null,action)=>{
        if(action.type==='SONG_SELECTED'){
            return action.payload
        }

        return selectedSong
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
})