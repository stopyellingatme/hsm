
const fromObjectToList = (object) => (
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : []
);



const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

























export {
  fromObjectToList,
  updateByPropertyName
}