import { useState } from 'react';
import { UsersList } from 'components/UsersList/UsersList';
import {
  fetchUsers,
  fetchUsersAll,
  fetchUsersFollow,
  fetchUsersFollowing,
} from 'redux/users/users-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLimit, selectIsLoading } from 'redux/selectors';
import { useLocation } from 'react-router-dom';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { clearUsers } from 'redux/users/usersSlice';
import { Circles } from 'react-loader-spinner';

import { Back, LoadMore, Box, BoxCircles } from './Tweets.styled';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');

  const limit = useSelector(selectLimit);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: 3 }));
  }, [dispatch, page]);

  useEffect(() => {
    switch (value) {
      case 1:
        dispatch(fetchUsersAll());

        break;
      case 2:
        dispatch(fetchUsersFollow());
        break;
      case 3:
        dispatch(fetchUsersFollowing());
        break;

      default:
        break;
    }
    return () => {
      dispatch(clearUsers());
    };
  }, [dispatch, value]);

  return (
    <>
      <Box>
        <Back to={useLocation().state.from}>Go back</Back>
        <Dropdown setValue={setValue} value={value} />
      </Box>
      {loading ? (
        <BoxCircles style={{ width: '100px', margin: '0 auto' }}>
          <Circles color="#4fa94d" visible={true} />
        </BoxCircles>
      ) : (
        <>
          <UsersList />

          {limit !== 3 ||
            (!value && (
              <LoadMore
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Load more
              </LoadMore>
            ))}
        </>
      )}
    </>
  );
};

export default Tweets;
