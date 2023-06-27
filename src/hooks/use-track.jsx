import { useSelector } from "react-redux";

export function useTrack() {
    const {id, name, author, durationInsecond, album, trackFile} = useSelector(state => state.currentTrack.track)
return {
            id,
            name,
            author,
            durationInsecond,
            album,
            trackFile
    }

};