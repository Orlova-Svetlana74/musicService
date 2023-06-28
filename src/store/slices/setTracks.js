import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trackId: {}
};

const setTracks = createSlice({
  name: 'track',
    initialState,  
  reducers: {   
      setTrackPlay: (state, action)=>{        
// eslint no-param-reassign: "error"
        state.trackId = action.payload.trackId;
      },
  }
})

export const { setTrackPlay  } = setTracks.actions
export default setTracks.reducer
