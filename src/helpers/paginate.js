const paginate = (countries, currentPage) => {
  const PAGESIZE = 8;
  const lastPostIndex = currentPage * PAGESIZE;
  const firstPostIndex = lastPostIndex - PAGESIZE;
  const currentPosts = countries.slice(firstPostIndex, lastPostIndex);

  return currentPosts;
};

export default paginate;
