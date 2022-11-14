import paginationConstants from '../constants/pagination';

const paginate = (countries, currentPage) => {
  const lastPostIndex = currentPage * paginationConstants.PAGESIZE;
  const firstPostIndex = lastPostIndex - paginationConstants.PAGESIZE;
  const currentPosts = countries.slice(firstPostIndex, lastPostIndex);

  return currentPosts;
};

export default paginate;
