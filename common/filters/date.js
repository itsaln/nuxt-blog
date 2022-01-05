export default (value, type) => {
  const date = new Date(value)

  // if (type === 'date') {
  //   return date.toLocaleDateString()
  // } else if (type === 'time') {
  //   return date.toLocaleTimeString()
  // }
  //
  // return date.toLocaleString()

  switch (type) {
    case 'date':
      return date.toLocaleDateString()
    case 'time':
      return date.toLocaleTimeString()
    default:
      return date.toLocaleString()
  }

}
