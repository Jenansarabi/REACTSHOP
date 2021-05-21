import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, setPost } from '../store/actions/postsActions';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost(id))

    return () => {
      // console.log('cleanup');
      dispatch(setPost(null))
    }

  }, [dispatch, id])

  const post = useSelector(state => state.postsReducer.post);
  const loading = useSelector(state => state.postsReducer.loading);

  const _post = ( post && 
    <div>
      <h2>{ post.title }</h2>
      <p>{ post.body }</p>
    </div>)

  return (
    <div>
      { _post }
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default PostDetails
