export default function(s) {
  var v = s.replace(/,$/,"")
  return v.split(",").map( (d) => (parseInt(d)))
}
