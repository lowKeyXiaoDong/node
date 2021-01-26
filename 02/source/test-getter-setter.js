const obj = {
  info: {
    name: 'hxd',
  },
  get name() {
    return this.info.name
  },
  set name(val) {
    this.info.name = `{{{${val}}}}`
  },
}

console.log(obj.name)
obj.name = 'wss'
console.log(obj.name)
