
export const RandomInt = (param = 1) => Math.floor(Math.random() * param)

export const RandomIntMinMax = (min = 0, max = 10) => Math.floor(Math.random() * (max - min) + min)
