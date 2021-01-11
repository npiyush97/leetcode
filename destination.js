var destCity = function(paths) {
//  map
    // let map = new Map()
    // for(const path of paths){
    //     map.set(path[0],map.has(path[0]) ? 0 : 1)
    //     map.set(path[1],map.has(path[1]) ? 0 : -1)
    // }
    // for(const item of map){
    //     if(item[1] == -1) return item[0]
    // }
    //  set
    // let set = new Set()
    // for(const path of paths) set.add(path[0])
    // for(const path of paths){
    //     if(!set.has(path[1])) return path[1]
    // }
    // hash
    // let hash = new Map(paths)
    // for(const path of hash.values()){
    //     if(!hash.has(path)) return path
    // }
    const a = paths.map(x => x[0])
    const d = paths.map(x => x[1])

    return d.filter(des => a.indexOf(des) === -1).join('')

};

console.log(destCity([['london','new york'],['new york','lima'],['lima','sau paulo']]))

// console.log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]))
