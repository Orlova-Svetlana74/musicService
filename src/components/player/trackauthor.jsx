import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

function Trackauthor() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="track__author">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={200} count={1} />
        ) : (
      <a className="track__author-link" href="http://">
        Dynoro, Outwork, Mr. Gee
      </a>
      )}
      </SkeletonTheme>
    </div>
  )
}
export default Trackauthor