function filterData(searchText, allRestraunats) {
  const filter = allRestraunats.filter((res) => 
    res.data.name.includes(searchText)
  )
  return filter;
}

export default filterData;