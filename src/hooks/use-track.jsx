import { useSelector } from "react-redux";

export function useTrack() {
    /* eslint camelcase: ["error", {ignoreDestructuring: true}] */
    const {id, name, author, duration_in_second, album, track_file} = useSelector(state => state.user)

    /* eslint camelcase: ["error", {ignoreDestructuring: true}] */
    return {    
    // eslint-disable-next-line camelcase
    id, name, author, duration_in_second, album, track_file
    }

};