const _toString = Object.prototype.toString

export const isObject = (o: unknown) => _toString.call(o).slice(8, -1).toLowerCase() === 'object'

export const isArray = Array.isArray

export const isString = (val: unknown) => typeof val === "string"

export const hasOwnProperty = Object.prototype.hasOwnProperty