import parseRegion from "./parseRegion"
export default function(s) {
  var a = s.split(/[;, ]+/)
  var r =[]
  a.forEach(function(d){
    r.push(parseRegion(d))
  })
  return r
}
